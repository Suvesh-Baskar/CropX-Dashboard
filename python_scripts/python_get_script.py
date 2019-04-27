import requests

r = requests.get("http://localhost:3000/api")

data = r.json()

print(data)
