import { API_URL } from '@/configs'
import { IProduct } from '@/server/modules/products/products.interface'
import Heading from '@/ui/Heading'
import Layout from '@/ui/Layout'
import ProductCard from '@/ui/ProductCard'
import axios from 'axios'
import React, { ReactElement } from 'react'

interface Props {
  products: Array<IProduct>
}

export default function AllProductsPage({ products }: Props) {
  return (
    <section className='py-20'>
      <Heading title='All Products' subtitle='Check out our products' />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products?.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  )
}

AllProductsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='All Products | PC Builder X'>{page}</Layout>
}

export async function getStaticProps() {
  const productsData = await axios.get(`${API_URL}/products`)
  const products = productsData?.data?.data
  return {
    props: {
      products,
    },
    revalidate: 30,
  }
}
