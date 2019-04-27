const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SensorDataSchema = new Schema({
  sensor: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('sensorSchema', SensorDataSchema);
