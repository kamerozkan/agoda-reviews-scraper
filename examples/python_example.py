"""Run agoda-reviews-scraper on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'hotels': ['10936'],
 'maxReviews': 20,
 'sortBy': 'most_recent',
 'travelerType': 'all',
 'language': '',
 'searchKeyword': '',
 'includeHotelSummary': True}
run = client.actor("kamerozkan/agoda-reviews-scraper").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
