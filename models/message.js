const mongoose = require('mongoose');
const Schema = mongoose.Schema

const messageSchema = new Schema (
  {
    body: String,
    sender: {type: Schema.Types.ObjectId, ref: 'User'},
    recipient: {type: Schema.Types.ObjectId, ref: 'User'},
  }, {
    timestamps: true
  }
)

module.exports = mongoose.model('Message', messageSchema);