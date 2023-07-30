import { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Layout from '@/ui/Layout'
import Header from '@/components/Homepage/Header'
import { API_URL } from '@/configs'
import FeaturedProducts from '@/components/Homepage/FeaturedProducts'
import { IProduct } from '@/server/modules/products/products.interface'
import axios from 'axios'
import FeaturesCategories from '@/components/Homepage/FeaturesCategories'

interface Props {
  products: Array<IProduct>
}

const HomePage: NextPageWithLayout<Props> = ({ products }) => {
  return (
    <>
      <Header />
      <FeaturedProducts products={products} />
      <FeaturesCategories />
    </>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='PC Builder X | Homepage'>{page}</Layout>
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

export default HomePage
