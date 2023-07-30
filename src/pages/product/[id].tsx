import ProductDescription from '@/components/ProductDetails/ProductDescription'
import ProductHeader from '@/components/ProductDetails/ProductHeader'
import { API_URL } from '@/configs'
import { IProduct } from '@/server/modules/products/products.interface'
import Layout from '@/ui/Layout'
import axios from 'axios'
import { GetStaticPropsContext } from 'next'
import React, { ReactElement } from 'react'

interface Props {
  product: IProduct
}

export default function ProductDetailsPage({ product }: Props) {
  return (
    <section className='py-10'>
      <ProductHeader product={product} />
      <ProductDescription product={product} />
    </section>
  )
}

ProductDetailsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='Product Details | PC Builder X'>{page}</Layout>
}

export async function getStaticPaths() {
  const productsData = await axios.get(`${API_URL}/products`)
  const products = productsData?.data?.data
  const allPaths = products?.map((product: IProduct) => ({
    params: {
      id: product?._id,
    },
  }))

  return {
    paths: allPaths,
    fallback: true,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const productsData = await axios.get(`${API_URL}/products/${params?.id}`)
  const product = productsData?.data?.data
  return {
    props: {
      product,
    },
    revalidate: 30,
  }
}
