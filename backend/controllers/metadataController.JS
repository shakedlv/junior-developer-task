import axios from 'axios';
import cheerio from 'cheerio';

export const fetchMetadata = async (url) => {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const title = $('title').text();
        const description = $('meta[name="description"]').attr('content');
        const image = $('meta[property="og:image"]').attr('content');

        return { title, description, image };
    } catch (error) {
        return { error: 'Failed to fetch metadata' };
    }
};
