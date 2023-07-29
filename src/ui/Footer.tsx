import React from 'react'
import categories from '@/data/category.json'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-neutral text-neutral-content'>
      <div className='footer p-10 justify-evenly'>
        <div>
          <span className='footer-title'>Categories</span>
          {categories.map(({ id, label, value }) => (
            <Link href={`/products/${value}`} key={id} className='link link-hover'>
              {label}
            </Link>
          ))}
        </div>
        <div>
          <Link href='/all-products' className='footer-title'>
            Browse All Products
          </Link>
          <Link href='/pc-builder' className='footer-title'>
            Build your dream PC now
          </Link>
        </div>
      </div>
      <p className='text-center text-lg pb-5'>
        All right reserved &copy; {new Date().getFullYear()} | PC Builder |{' '}
        <cite>
          <a href='https://www.linkedin.com/in/mohammad-naimur-rahman/' rel='norefferer noopener' target='_blank'>
            Naimur Rahman
          </a>
        </cite>
      </p>
    </footer>
  )
}
