import Image from 'next/image'
import { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Layout from '@/ui/Layout'

const HomePage: NextPageWithLayout = () => {
  return <h1>dsfdsf</h1>
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='PC Builder | Homepage'>{page}</Layout>
}

export default HomePage
