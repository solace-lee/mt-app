import mongoose from 'mongoose'
const Schema = mongoose.Schema
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    required: true,
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
})

export default mongoose.model('User', UserSchema)