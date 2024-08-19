const test = require('node:test');
const assert = require('assert/strict');
const { fetchMetadata } = require('../controllers/metadataController');

test('Should fail metadata is not a number ', () => {
    return assert.equal(fetchMetadata("https://www.google.com/"), 22);
});

describe('Metadata checks', () => {

    it('should pass google return matadata', async () => {
        var res = await fetchMetadata("https://www.google.com/");
        expect(res).toHaveProperty('title');
        expect(res).toHaveProperty('description');
        expect(res).toHaveProperty('image');
    });

    it('should fail google title is not facebook', async () => {
        var res = await fetchMetadata("https://www.google.com/");
        expect(res).toHaveProperty('title', 'facebook');

    });

    it('should fail this is not a url', async () => {
        var res = await fetchMetadata("this is not a url");
        expect(res).toHaveProperty('title');

    });

    it('should pass this is not a url received error ', async () => {
        var res = await fetchMetadata("this is not a url");
        expect(res).toHaveProperty('error', "Failed to fetch metadata for url - this is not a url");

    });

    it('should pass this is not a url received error ', async () => {
        var res = await fetchMetadata();
        expect(res).toHaveProperty('error', "Failed to fetch metadata url is undefined or null");

    });
});