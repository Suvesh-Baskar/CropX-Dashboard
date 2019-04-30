import requests


r = requests.post("http://localhost:3000/api",json={"sensor": "VALVE3","value": 0})
print(r)
