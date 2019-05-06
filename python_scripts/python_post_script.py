import requests


r = requests.post("https://peaceful-basin-90158.herokuapp.com/api",json={"sensor": "MOTOR","value": 0})
print(r)

r = requests.post("https://peaceful-basin-90158.herokuapp.com/api",json={"sensor": "VALVE1","value": 0})
print(r)

r = requests.post("https://peaceful-basin-90158.herokuapp.com/api",json={"sensor": "VALVE2","value": 0})
print(r)

r = requests.post("https://peaceful-basin-90158.herokuapp.com/api",json={"sensor": "VALVE3","value": 0})
print(r)

r = requests.post("https://peaceful-basin-90158.herokuapp.com/api",json={"sensor": "BAT","value": 0})
print(r)

