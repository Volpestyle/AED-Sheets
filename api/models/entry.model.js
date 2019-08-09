const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mexp = require('mongoose-elasticsearch-xp');
const CONFIG = require('config');

const noteSchema = new Schema({
  author: String,
  content: String,
  createdAt: { type: Date, required: true, default: Date.now },
});

// entries
const entrySchema = new Schema({
  submittedBy: {
    type: String,
    es_type: 'keyword',
    es_indexed: true,
  },
  date: {
    type: Date,
    es_indexed: true,
    required: true,
  },
  createdAt: { type: Date, required: true, default: Date.now },
  modifiedBy: String,
  modifiedAt: Date,
  location: {
    type: String,
    es_type: 'keyword',
    es_indexed: true,
  },
  show: {
    type: String,
    es_type: 'keyword',
    es_indexed: true,
  },
  classification: {
    type: String,
    es_type: 'keyword',
    es_indexed: true,
  },
  heardOnAir: {
    type: String,
    es_type: 'keyword',
    es_indexed: true,
  },
  actionTaken: {
    type: String,
    es_type: 'keyword',
    es_indexed: true,
  },
  onAir: {
    type: Boolean,
    es_indexed: true,
  },
  funder: {
    type: Boolean,
    es_indexed: true,
  },
  duration: {
    type: Number,
    es_indexed: true,
  },
  eTag: { type: String, es_type: 'text', es_indexed: true },
  entry: {
    type: String,
    es_type: 'text',
    es_indexed: true,
  },
  notes: {
    type: [noteSchema],
  },
  serviceTicket: { type: Boolean, es_indexed: true },
  attachment: Schema.Types.Mixed,
  isDeleted: { type: Boolean, es_indexed: true },
});

const entrySchema2 = new Schema(entrySchema);

//Elastic Search
entrySchema.plugin(mexp, {
  host: CONFIG.get('elasticsearch.host'),
  port: CONFIG.get('elasticsearch.port'),
});
entrySchema2.plugin(mexp, {
  host: CONFIG.get('elasticsearch.host'),
  port: CONFIG.get('elasticsearch.port'),
});

//create the models
const Entry = mongoose.model('Entry', entrySchema);
Entry.esOptions({ include_type_name: true });
Entry.esCreateMapping();

const CurrentEntry = mongoose.model('CurrentEntry', entrySchema2);
CurrentEntry.esOptions({ include_type_name: true });
CurrentEntry.esCreateMapping();

module.exports = { Entry, CurrentEntry, entrySchema };
