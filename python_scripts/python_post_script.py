import requests


r = requests.post("https://peaceful-basin-90158.herokuapp.com/api",json={"sensor": "BAT","value": 75})
print(r)

r = requests.post("https://peaceful-basin-90158.herokuapp.com/api",json={"sensor": "BAT2","value": 81})
print(r)

r = requests.post("https://peaceful-basin-90158.herokuapp.com/api",json={"sensor": "SOIL1","value": 49})
print(r)

r = requests.post("https://peaceful-basin-90158.herokuapp.com/api",json={"sensor": "SOIL2","value": 72})
print(r)

r = requests.post("https://peaceful-basin-90158.herokuapp.com/api",json={"sensor": "SOIL3","value": 58})
print(r)

r = requests.post("https://peaceful-basin-90158.herokuapp.com/api",json={"sensor": "MOTOR","value": 0})
print(r)

r = requests.post("https://peaceful-basin-90158.herokuapp.com/api",json={"sensor": "VALVE1","value": 0})
print(r)

r = requests.post("https://peaceful-basin-90158.herokuapp.com/api",json={"sensor": "VALVE2","value": 0})
print(r)

r = requests.post("https://peaceful-basin-90158.herokuapp.com/api",json={"sensor": "VALVE3","value": 0})
print(r)

r = requests.post("https://peaceful-basin-90158.herokuapp.com/api",json={"sensor": "TC","value": 21})
print(r)

r = requests.post("https://peaceful-basin-90158.herokuapp.com/api",json={"sensor": "SOILTC","value": 20.9})
print(r)

r = requests.post("https://peaceful-basin-90158.herokuapp.com/api",json={"sensor": "HUM","value": 51.4})
print(r)

r = requests.post("https://peaceful-basin-90158.herokuapp.com/api",json={"sensor": "PRES","value": 1.02})
print(r)

print("Done Uploading")


print(r)

