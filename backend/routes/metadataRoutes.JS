const express = require('express');
const { fetchMetadata } = require('../controllers/metadataController.JS');

const router = express.Router();

router.post('/api/fetch-metadata', async (req, res) => {
    const { urls } = req.body;
    const metadataList = await Promise.all(urls.map(url => fetchMetadata(url)));
    res.json(metadataList);
});

module.exports = router;
