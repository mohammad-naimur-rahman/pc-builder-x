import { API_URL } from '@/configs'
import { categories } from '@/data/categories'
import { IProduct } from '@/server/modules/products/products.interface'
import Heading from '@/ui/Heading'
import Layout from '@/ui/Layout'
import axios from 'axios'
import Link from 'next/link'
import React, { ReactElement } from 'react'

interface Products {
  category: string
  products: Array<IProduct>
}

interface Props {
  productsByCategory: Array<Products>
}

export default function PcBuilderPage({ productsByCategory }: Props) {
  console.log(productsByCategory)
  return (
    <main className='py-10'>
      <Heading title='PC Builder' subtitle='Build your dream PC now!' />
      <div className='flex flex-col max-w-4xl mx-auto'>
        {categories.map(({ id, icon, label, value }) => (
          <div key={id} className='flex items-center justify-between border-2 border-gray-400 rounded-md my-2 p-4'>
            <div className='flex items-center gap-2'>
              <span className='text-3xl'>{icon}</span>
              <span className='text-xl ml-3'>{label}</span>
            </div>
            <Link href={`/choose-components/${value}`} className='btn btn-primary'>
              Choose
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}

PcBuilderPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='PC Builder | PC Builder X'>{page}</Layout>
}

export async function getServerSideProps() {
  const promises = categories.map(async category => {
    const response = await axios.get(`${API_URL}/products?category=${category.value}`)
    return { category: category.label, products: response?.data?.data }
  })

  try {
    const productsByCategory = await Promise.all(promises)
    return {
      props: {
        productsByCategory,
      },
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: {
        productsByCategory: [],
      },
    }
  }
}
