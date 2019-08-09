const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const queueItemSchema = new Schema({
  subName: String,
  subId: Schema.Types.ObjectId,
  subIsShared: Boolean,
  entry: { type: Schema.Types.ObjectId, ref: 'Entry' },
});

const subSchema = new Schema({
  name: String,
  type: String,
  freq: String,
  rawQuery: Schema.Types.Mixed,
  query: Schema.Types.Mixed,
  author: String,
});

const userSchema = new Schema({
  personId: Number,
  roles: { type: [String], required: true, default: [] },
  name: String,
  email: String,
  phoneNumber: String,
  subs: [subSchema],
  sharedSubs: [{ type: Schema.Types.ObjectId, ref: 'SharedSubs' }],
  queues: {
    daily: [queueItemSchema],
    weekly: [queueItemSchema],
  },
});

const User = mongoose.model('User', userSchema);
const SharedSub = mongoose.model('SharedSubs', subSchema);

module.exports = { User, SharedSub };
