import ChooseComponentCard from '@/components/ChooseComponents/ChooseComponentCard'
import { API_URL } from '@/configs'
import { IProduct } from '@/server/modules/products/products.interface'
import Heading from '@/ui/Heading'
import Layout from '@/ui/Layout'
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
      <Heading title={formatCategory(category)} subtitle='Choose your desired product for building your PC' />
      <div className='flex flex-col gap-5'>
        {products?.map(product => (
          <ChooseComponentCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  )
}

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='Category | PC Builder X'>{page}</Layout>
}

export async function getServerSideProps({ params }: GetStaticPropsContext) {
  const productsData = await axios.get(`${API_URL}/products?category=${params?.category}`)
  const products = productsData?.data?.data
  return {
    props: {
      products,
      category: params?.category,
    },
  }
}
