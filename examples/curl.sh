#!/usr/bin/env bash
# Run agoda-reviews-scraper synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~agoda-reviews-scraper/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"hotels": ["10936"], "maxReviews": 20, "sortBy": "most_recent", "travelerType": "all", "language": "", "searchKeyword": "", "includeHotelSummary": true}'
