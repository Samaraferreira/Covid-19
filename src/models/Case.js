const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const CaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  symptoms: {
    type: [],
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

CaseSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Case", CaseSchema);
