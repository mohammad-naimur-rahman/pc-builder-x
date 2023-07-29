import { Model } from 'mongoose'

interface IReview {
  name: string
  rating: number
  review: string
}

export interface IProduct {
  _id?: string
  image: string
  name: string
  category: 'cpu' | 'motherboard' | 'ram' | 'psu' | 'storage' | 'monitor' | 'others'
  status: 'In Stock' | 'Out of stock'
  price: number
  description: string
  keyFeatures: {
    brand: string
    model?: string
    specification?: string
    resolution?: string
    clockSpeed?: string
    capacity?: string
  }
  averageRating: number
  reviews: IReview[]
}

export type ProductModel = Model<IProduct, Record<string, unknown>>
