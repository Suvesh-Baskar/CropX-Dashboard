const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

require('../../models/sensorData');
const Sensor = mongoose.model('sensorSchema');

router.get('/', (req, res) => {
  Sensor.find()
    .sort({ date: 'desc' })
    .then(data => res.json(data));
});

router.post('/', (req, res) => {
  const sensorData = {
    sensor: req.body.sensor,
    value: req.body.value
  };

  new Sensor(sensorData).save().then(data => {
    res.json({
      msg: 'Value inserted to the database'
    });
  });
});

module.exports = router;
