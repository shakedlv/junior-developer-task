import express from 'express';
import { fetchMetadata } from '../controllers/metadataController.JS';

const router = express.Router();

router.post('/fetch-metadata', async (req, res) => {
    const { urls } = req.body;
    const metadataList = await Promise.all(urls.map((url) => fetchMetadata(url)));
    res.json(metadataList);
});

export default router;