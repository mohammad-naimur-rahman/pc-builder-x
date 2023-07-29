import { IProduct } from '@/server/modules/products/products.interface'
import Img from '@/ui/Img'
import { formatCategory, formatCurrency } from '@/utils/formatProductValues'
import React from 'react'
import FeaturedProductCard from './FeaturedProductCard'

interface Props {
  products: Array<IProduct>
}

export default function FeaturedProducts({ products }: Props) {
  return (
    <section className='py-20'>
      <h2 className='text-4xl text-center pb-10'>Featured Products</h2>
      <div className='grid grid-cols-3'>
        {products.map(product => (
          <FeaturedProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  )
}
