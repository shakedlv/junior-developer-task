const axios = require('axios');
const cheerio = require('cheerio');

const fetchMetadata = async (url) => {
    if(!url)
    {
        return { error: 'Failed to fetch metadata url is undefined or null' }; 
    }

    try {
        const { data } = await axios.get(url);
        const website = cheerio.load(data);
        const title = website('title').text();
        const description = website('meta[name="description"]').attr('content');
        const image = website('meta[property="og:image"]').attr('content');

        return { title, description, image };
    } catch (error) {
        return { error: 'Failed to fetch metadata for url - ' + url };
    }
};

module.exports = { fetchMetadata };
