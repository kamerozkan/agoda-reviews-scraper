# Agoda Reviews Scraper - Hotel Ratings, Sub-Scores and Sentiment

Extract Agoda hotel reviews, guest ratings, category sub-scores, aspect sentiment breakdowns, and management responses by hotel URL or ID. Fast JSON API with traveler type, language, and sort filters.

**[Run it on Apify Store](https://apify.com/kamerozkan/agoda-reviews-scraper)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/agoda-reviews-scraper); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/agoda-reviews-scraper).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/agoda-reviews-scraper) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "hotels": [
    "10936"
  ],
  "maxReviews": 20,
  "sortBy": "most_recent",
  "travelerType": "all",
  "language": "",
  "searchKeyword": "",
  "includeHotelSummary": true
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Use in n8n & Make

- **n8n:** Import [integrations/n8n-workflow.json](integrations/n8n-workflow.json) directly into your n8n workspace, set your `APIFY_TOKEN` environment variable (or Bearer token header), and click **Execute Workflow**.
- **Make / Zapier:** Call the Apify **Run an Actor** module with Actor ID `kamerozkan/agoda-reviews-scraper` and the JSON input above, or POST to `https://api.apify.com/v2/acts/kamerozkan~agoda-reviews-scraper/run-sync-get-dataset-items`.

## Use with AI Agents (Apify MCP)

This Actor works with Claude Desktop, Cursor, Windsurf and any MCP-compatible AI agent through the official [Apify MCP Server](https://mcp.apify.com). Copy [integrations/mcp-config.json](integrations/mcp-config.json) into your MCP client configuration and replace `YOUR_APIFY_TOKEN` with your token.

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "hotelId": 10936,
    "hotelName": "The Surin Phuket",
    "hotelReviewUrl": "https://www.agoda.com/the-surin-phuket-sha-plus/reviews/phuket-th.html",
    "reviewId": 1199437989,
    "provider": "Agoda",
    "rating": 10,
    "ratingText": "Exceptional",
    "reviewTitle": "Amazing hotel",
    "reviewComments": "Beautiful hotel in a stunning setting. The beach was amazing, free body boarding, paddle boards, yoga lessons etc. staff were so friendly, food was great- would definitely stay here again when visiting Phuket",
    "reviewPositives": "",
    "reviewNegatives": "",
    "language": "en",
    "reviewDate": "2026-10-25T09:27:54+07:00",
    "checkInDate": "2026-10-19T00:00:00+07:00",
    "checkOutDate": "2026-10-25T00:00:00+07:00",
    "checkInMonthYear": "October 2026",
    "reviewerName": "Naomi",
    "reviewerCountry": "Hong Kong SAR, China",
    "reviewerCountryCode": "HK",
    "travelerType": "Group",
    "roomType": "1-Bedroom Superior Cottage",
    "lengthOfStay": 6,
    "helpfulVotes": 0,
    "hasHotelResponse": false,
    "responderName": "",
    "responseText": "",
    "responseDate": "",
    "hotelOverallScore": 9.1,
    "hotelReviewCount": 1364,
    "hotelSubScores": {
      "cleanliness": 9.3,
      "facilities": 9.2,
      "location": 9.2,
      "roomComfort": 8.7,
      "staffPerformance": 9.2,
      "valueForMoney": 8.7
    },
    "aspectSentiment": [
      {
        "aspect": "Service",
        "mentions": 33,
        "positivePct": 90,
        "negativePct": 9,
        "ratingType": "Excellent"
      },
      {
        "aspect": "Beach",
        "mentions": 30,
        "positivePct": 100,
        "negativePct": 0,
        "ratingType": "Excellent"
      },
      {
        "aspect": "Location",
        "mentions": 14,
        "positivePct": 92,
        "negativePct": 7,
        "ratingType": "Excellent"
      },
      {
        "aspect": "Breakfast",
        "mentions": 9,
        "positivePct": 77,
        "negativePct": 22,
        "ratingType": "Excellent"
      },
      {
        "aspect": "Pool",
        "mentions": 9,
        "positivePct": 100,
        "negativePct": 0,
        "ratingType": "Excellent"
      },
      {
        "aspect": "Restaurant options",
        "mentions": 9,
        "positivePct": 66,
        "negativePct": 33,
        "ratingType": "Excellent"
      },
      {
        "aspect": "Cleanliness",
        "mentions": 7,
        "positivePct": 100,
        "negativePct": 0,
        "ratingType": "Excellent"
      },
      {
        "aspect": "Atmosphere",
        "mentions": 6,
        "positivePct": 100,
        "negativePct": 0,
        "ratingType": "Excellent"
      },
      {
        "aspect": "Room comfort",
        "mentions": 5,
        "positivePct": 80,
        "negativePct": 20,
        "ratingType": "Excellent"
      },
      {
        "aspect": "Room view",
        "mentions": 5,
        "positivePct": 100,
        "negativePct": 0,
        "ratingType": "Excellent"
      }
    
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/agoda-reviews-scraper/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
