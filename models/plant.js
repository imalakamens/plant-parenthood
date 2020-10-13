const mongoose = require('mongoose');
const Schema = mongoose.Schema

const plantSchema = new Schema (
  {
    commonName: String,
    scientificName: String,
    description: String,
    placementStatus: {
      type: Boolean,
      default: true
    },
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    notes: String
  }, {
    timestamps: true
  }
)

module.exports = mongoose.model('Plant', plantSchema);