import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Province = new Schema({
  id: {
    type: String,
    required: true
  },
  value: {
    required: true,
    type: String
  }
})

export default mongoose.model('Province', Province)