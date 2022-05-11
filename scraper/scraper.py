import requests


URL = "http://cdec4gov.water.ca.gov/dynamicapp/QueryDaily?s=SHA&end=2022-02-14&span=10days"
page = requests.get(URL)

print(page.text)