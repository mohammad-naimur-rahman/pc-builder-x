import Img from '@/ui/Img'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='h-min-body flex items-center justify-between'>
      <div className='w-1/2 flex flex-col gap-10'>
        <h1 className='text-7xl text-primary'>PC Builder X</h1>
        <h2 className='text-6xl font-light'>Build your dream PC today!</h2>
        <h3 className='text-4xl italic font-normal'>Select and build your dream PC from home</h3>
        <div className='flex gap-3 pt-5'>
          <Link href='/pc-builder' className='btn btn-primary'>
            Build your pc now
          </Link>
          <Link href='/all-products' className='btn btn-info'>
            Explore all products
          </Link>
        </div>
      </div>
      <div className='w-1/2'>
        <Img src='/images/hero.png' alt='Build your dream pc today' />
      </div>
    </header>
  )
}
