import { IProduct } from '@/server/modules/products/products.interface'
import React from 'react'
import Heading from '@/ui/Heading'
import ProductCard from '@/ui/ProductCard'

interface Props {
  products: Array<IProduct>
}

export default function FeaturedProducts({ products }: Props) {
  return (
    <section className='py-20'>
      <Heading title='Featured Products' subtitle='Check out our featured products' />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {products?.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  )
}
