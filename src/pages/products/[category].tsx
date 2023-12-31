import { API_URL } from '@/configs'
import { categories } from '@/data/categories'
import { IProduct } from '@/server/modules/products/products.interface'
import Heading from '@/ui/Heading'
import Layout from '@/ui/Layout'
import ProductCard from '@/ui/ProductCard'
import { formatCategory } from '@/utils/formatProductValues'
import axios from 'axios'
import { GetStaticPropsContext } from 'next'
import React, { ReactElement } from 'react'

interface Props {
  products: Array<IProduct>
  category: string
}

export default function CategoryPage({ products, category }: Props) {
  return (
    <section className='py-10'>
      <Heading title={formatCategory(category)} subtitle='Choose your desired product from featured categories' />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {products?.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  )
}

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='Category | PC Builder X'>{page}</Layout>
}

export async function getStaticPaths() {
  const categoriesData = categories?.map(category => ({
    params: {
      category: category?.value,
    },
  }))

  return {
    paths: categoriesData,
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const productsData = await axios.get(`${API_URL}/products?category=${params?.category}`)
  const products = productsData?.data?.data
  return {
    props: {
      products: products || null,
      category: params?.category,
    },
    revalidate: 30,
  }
}
