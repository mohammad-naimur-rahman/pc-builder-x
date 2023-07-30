import Img from '@/ui/Img'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='h-min-body flex flex-col md:flex-row gap-10 items-center justify-center md:justify-between px-5'>
      <div className='w-full order-2 md:order-1 md:w-1/2 flex flex-col gap-10'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary'>PC Builder X</h1>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light'>
          Build your dream PC today!
        </h2>
        <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-normal'>
          Select and build your dream PC from home
        </h3>
        <div className='flex flex-wrap gap-3 pt-5'>
          <Link href='/pc-builder' className='btn btn-primary'>
            Build your pc now
          </Link>
          <Link href='/all-products' className='btn btn-info'>
            Explore all products
          </Link>
        </div>
      </div>
      <div className='w-3/4 md:w-1/2 order-1 md:order-2'>
        <Img src='/images/hero.png' alt='Build your dream pc today' />
      </div>
    </header>
  )
}
