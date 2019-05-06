const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

require('../models/sensorData');
const Sensor = mongoose.model('sensorSchema');

var battery1,
  battery2,
  soil1,
  soil2,
  soil3,
  motor,
  valve1,
  valve2,
  valve3,
  aTemp,
  sTemp,
  hum,
  pres;
router.get('/', (req, res) => {
  Sensor.find({ sensor: 'BAT' })
    .sort({ date: 'desc' })
    .select({ value: 1, _id: 0 })
    .limit(1)
    .then(data => {
      battery1 = data[0].value;
      Sensor.find({ sensor: 'SOIL1' })
        .sort({ date: 'desc' })
        .select({ value: 1, _id: 0 })
        .limit(1)
        .then(data => {
          soil1 = Math.round((data[0].value - 300) * (100 / 7500));
          Sensor.find({ sensor: 'SOIL2' })
            .sort({ date: 'desc' })
            .select({ value: 1, _id: 0 })
            .limit(1)
            .then(data => {
              soil2 = Math.round((data[0].value - 300) * (100 / 7500));
              Sensor.find({ sensor: 'SOIL3' })
                .sort({ date: 'desc' })
                .select({ value: 1, _id: 0 })
                .limit(1)
                .then(data => {
                  soil3 = Math.round((data[0].value - 300) * (100 / 7500));
                  Sensor.find({ sensor: 'MOTOR' })
                    .sort({ date: 'desc' })
                    .select({ value: 1, _id: 0 })
                    .limit(1)
                    .then(data => {
                      motor = data[0].value;
                      Sensor.find({ sensor: 'VALVE1' })
                        .sort({ date: 'desc' })
                        .select({ value: 1, _id: 0 })
                        .limit(1)
                        .then(data => {
                          valve1 = data[0].value;
                          Sensor.find({ sensor: 'VALVE2' })
                            .sort({ date: 'desc' })
                            .select({ value: 1, _id: 0 })
                            .limit(1)
                            .then(data => {
                              valve2 = data[0].value;
                              Sensor.find({ sensor: 'VALVE3' })
                                .sort({ date: 'desc' })
                                .select({ value: 1, _id: 0 })
                                .limit(1)
                                .then(data => {
                                  valve3 = data[0].value;
                                  Sensor.find({ sensor: 'STEMP' })
                                    .sort({ date: 'desc' })
                                    .select({ value: 1, _id: 0 })
                                    .limit(1)
                                    .then(data => {
                                      sTemp = data[0].value;
                                      Sensor.find({ sensor: 'ATEMP' })
                                      .sort({ date: 'desc' })
                                      .select({ value: 1, _id: 0 })
                                      .limit(1)
                                      .then(data => {
                                        aTemp = data[0].value;
                                        Sensor.find({ sensor: 'HUM' })
                                        .sort({ date: 'desc' })
                                        .select({ value: 1, _id: 0 })
                                        .limit(1)
                                        .then(data => {
                                          hum = data[0].value;
                                          Sensor.find({ sensor: 'PRES' })
                                          .sort({ date: 'desc' })
                                          .select({ value: 1, _id: 0 })
                                          .limit(1)
                                          .then(data => {
                                            pres = data[0].value;
                                            res.render('dashboard', {
                                              battery1,
                                              battery2,
                                              soil1,
                                              soil2,
                                              soil3,
                                              motor,
                                              valve1,
                                              valve2,
                                              valve3,
                                              sTemp,
                                              aTemp,
                                              hum,
                                              pres
                                            });
                                          });
                                        });
                                      });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});



router.get('/soil1', (req, res) => {
  Sensor.find({ sensor: 'SOIL1' })
    .sort({ date: 'desc' })
    .select({ value: 1, _id: 0 })
    .limit(1)
    .then(data => {
      soil1 = Math.round((data[0].value - 300) * (100 / 7500));
      Sensor.find({ sensor: 'SOIL1' })
        .select({ value: 1, _id: 0 })
        .limit(100)
        .then(response => {
          let dataSet = [];
          let labelSet = [];
          response.forEach((data, index) => {
            dataSet.push(data.value);
            labelSet.push(index);
          });
          res.render('soil1', {
            value: soil1,
            label: labelSet,
            data: dataSet
          });
        });
    });
});

router.get('/soil2', (req, res) => {
  Sensor.find({ sensor: 'SOIL2' })
    .sort({ date: 'desc' })
    .select({ value: 1, _id: 0 })
    .limit(1)
    .then(data => {
      soil2 = Math.round((data[0].value - 300) * (100 / 7500));
      Sensor.find({ sensor: 'SOIL2' })
        .select({ value: 1, _id: 0 })
        .limit(100)
        .then(response => {
          let dataSet = [];
          let labelSet = [];
          response.forEach((data, index) => {
            dataSet.push(data.value);
            labelSet.push(index);
          });
          res.render('soil2', {
            value: soil2,
            label: labelSet,
            data: dataSet
          });
        });
    });
});
router.get('/soil3', (req, res) => {
  Sensor.find({ sensor: 'SOIL3' })
    .sort({ date: 'desc' })
    .select({ value: 1, _id: 0 })
    .limit(1)
    .then(data => {
      soil3 = Math.round((data[0].value - 300) * (100 / 7500));
      Sensor.find({ sensor: 'SOIL3' })
        .select({ value: 1, _id: 0 })
        .limit(100)
        .then(response => {
          let dataSet = [];
          let labelSet = [];
          response.forEach((data, index) => {
            dataSet.push(data.value);
            labelSet.push(index);
          });
          res.render('soil3', {
            value: soil3,
            label: labelSet,
            data: dataSet
          });
        });
    });
});

module.exports = router;
