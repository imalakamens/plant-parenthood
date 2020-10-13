const mongoose = require('mongoose');
const Schema = mongoose.Schema

const plantSchema = new Schema (
  {
    commonName: String,
    scientificName: String,
    description: String,
    placementStatus: Boolean,
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    notes: [{type: String}]
  }, {
    timestamps: true
  }
)

module.exports = mongoose.model('Plant', plantSchema);