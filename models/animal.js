const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/test`);
const { Schema } = mongoose;

const AnimalSchema = new Schema({
  identificationNumber: Number,
  name: String,
  species: String,
  race: String,
  size: Number,
  weight: Number,
  description: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Animal', AnimalSchema);
