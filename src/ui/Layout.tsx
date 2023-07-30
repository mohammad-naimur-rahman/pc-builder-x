import { ReactNode } from 'react'
import Footer from './Footer'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'

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
        <main className='h-min-body mt-20 container'>{children}</main>
        <Footer />
        <Toaster position='top-center' reverseOrder={false} />
      </div>
    </>
  )
}
export default Layout
