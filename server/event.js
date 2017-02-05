var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  name: String,
  description: String,
  link: String,
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now },
  location: {
    longitude: Number,
    latitude:  Number
  }
});

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;
