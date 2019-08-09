const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const valueSchema = new Schema({
  lookup: String,
  title: String,
  val: Schema.Types.Mixed,
});
const LookupValue = mongoose.model('LookupValue', valueSchema);

module.exports = LookupValue;
