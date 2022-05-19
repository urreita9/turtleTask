import requests
from requests.structures import CaseInsensitiveDict

URL = 'https://gorest.co.in/public/v1/users';
TOKEN ='d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3';

headers = CaseInsensitiveDict()
headers["Accept"] = "application/json"
headers["Authorization"] = "Bearer {TOKEN}"


# response from api
response = requests.get(URL, headers=headers)

data = response.json()

print(data)