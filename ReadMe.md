# Dashboard for a IoT Project

Dashboard to monitor Realtime Moisture, Temperature and Other parameters built with basic server side rendered site. The Whole architechture is built on AWS. Meshlium, a IoT kit from Libelium pushes the data to the AWS IoT Core using MQTT protocol in realtime. It is then pushed to Lamda functions which are serverless functions. Lambda functions cleanses, and enriches the incoming data with weather forecast and stores in the IoT DataStore. The Lambda function also pushes realtime data to a RaspberryPi using the same MQTT protocol. The Logic for controlling the valve is written in RapberryPi.

---

## Tech Stack
- Libelium Meshlium IoT Kit
- AWS IoT Core
- Node.js
- Express.js
- MongoDb(Local Hosted)
- Mongoose
- Express Handlebars

---

Front end template used - **Lumino Admin Bootstrap Template**
Future Scope : **Building the same with React or anyfront end frameworks**
