import requests


r = requests.post("http://localhost:3000/api",json={"sensor": "MOTOR","value": 0})
print(r)

r = requests.post("http://localhost:3000/api",json={"sensor": "VALVE1","value": 0})
print(r)

r = requests.post("http://localhost:3000/api",json={"sensor": "VALVE2","value": 0})
print(r)

r = requests.post("http://localhost:3000/api",json={"sensor": "VALVE3","value": 1})
print(r)
