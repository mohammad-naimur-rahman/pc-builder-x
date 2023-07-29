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
        <main className='h-min-body mt-20 container'>{children}</main>
        <Footer />
      </div>
    </>
  )
}
export default Layout
