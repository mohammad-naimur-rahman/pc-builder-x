import mongoose, { Schema, model } from 'mongoose'
import { IProduct, ProductModel } from './products.interface'

const reviewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
})

const productSchema = new Schema<IProduct, ProductModel>(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      enum: ['cpu', 'motherboard', 'ram', 'psu', 'storage', 'monitor', 'others'],
      required: true,
    },
    status: {
      type: String,
      enum: ['In Stock', 'Out of stock'],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    keyFeatures: {
      brand: {
        type: String,
        required: true,
      },
      model: String,
      specification: String,
      resolution: String,
      clockSpeed: String,
      capacity: String,
    },
    averageRating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

export const Product = mongoose.models.Product || model<IProduct, ProductModel>('Product', productSchema)
