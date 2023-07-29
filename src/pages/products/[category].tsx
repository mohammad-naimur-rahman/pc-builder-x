import { API_URL } from '@/configs'
import Layout from '@/ui/Layout'
import axios from 'axios'
import React, { ReactElement } from 'react'

export default function CategoryPage() {
  return <div>CategoryPage</div>
}

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='PC Builder | Homepage'>{page}</Layout>
}

export async function getStaticProps() {
  const productsData = await axios.get(`${API_URL}/products/random`)
  const products = productsData?.data?.data
  return {
    props: {
      products,
    },
    revalidate: 30,
  }
}
