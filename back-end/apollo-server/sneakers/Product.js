import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String
  },
  img: {
    type: String
  },
  seller: {
    type: String,
    required: true
  },
  brand: {
    type: String
  },
  size: {
    type: String
  },
  serial: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  validator: {
    type: String
  },
  tokenID: {
    type: Number
  },
  likeNum: {
    type: Number
  },
  isSell: {
    type: Boolean
  },
  buyer: {
    type: String
  }
})

export default mongoose.model('product', ProductSchema)
