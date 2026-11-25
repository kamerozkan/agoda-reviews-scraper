// Run agoda-reviews-scraper on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "hotels": [
    "10936"
  ],
  "maxReviews": 20,
  "sortBy": "most_recent",
  "travelerType": "all",
  "language": "",
  "searchKeyword": "",
  "includeHotelSummary": true
};
const run = await client.actor('kamerozkan/agoda-reviews-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
