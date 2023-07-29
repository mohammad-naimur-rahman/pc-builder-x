import { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'

interface Props {
  title: string
  children: ReactNode
}

const Layout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Navbar />
        <main className='min-h-[calc(100dvh_-_80px)] mt-20'>{children}</main>
        <Footer />
      </div>
    </>
  )
}
export default Layout
