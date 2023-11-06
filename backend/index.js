import express from "express";
import cors from "cors";
import { scrapeProduct } from './utils/scraper.js';

const app = express();
const port = 5000;

// Configure CORS to allow requests from localhost:3000
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());

// Your API route
app.post('/api/data', async (req, res) => {
    const data = req.body;
    // console.log('Received Data:', data);
    const jData = await scrapeProduct(data);
    // console.log(jData);
    res.json({ message: 'Data received successfully', jData });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
