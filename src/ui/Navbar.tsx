import Link from 'next/link'
import React from 'react'
import { categories } from '@/data/categories'
import { useSession, signOut } from 'next-auth/react'

export default function Navbar() {
  const { data: session } = useSession()

  const signOutUser = () => {
    signOut()
  }
  return (
    <div className='navbar bg-base-100 w-full fixed top-0 left-0 h-20 px-0 lg:px-10 z-10'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
            </svg>
          </label>
          <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <Link href='/'>Homepage</Link>
            </li>
            <li>
              <Link href='/all-products'>All Products</Link>
            </li>
            <li>
              <a>Category</a>
              <ul className='p-2'>
                {categories?.map(({ id, label, value }) => (
                  <li key={id}>
                    <Link href={`/products/${value}`}>{label}</Link>
                  </li>
                ))}
              </ul>
            </li>
            {session?.user?.email ? (
              <li className='link link-hover' onClick={signOutUser}>
                <a>Logout</a>
              </li>
            ) : (
              <li>
                <Link href='/login'>Login</Link>
              </li>
            )}
          </ul>
        </div>
        <Link href='/' className='btn btn-ghost normal-case text-xl sm:text-2xl text-primary italic'>
          PC Builder X
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href='/'>Homepage</Link>
          </li>
          <li>
            <Link href='/all-products'>All Products</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Category</summary>
              <ul className='p-2'>
                {categories.map(({ id, label, value }) => (
                  <li key={id}>
                    <Link href={`/products/${value}`}>{label}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          {session?.user?.email ? (
            <li onClick={signOutUser}>
              <a>Logout</a>
            </li>
          ) : (
            <li>
              <Link href='/login'>Login</Link>
            </li>
          )}
        </ul>
      </div>
      <div className='navbar-end'>
        <Link href='/pc-builder' className='btn btn-primary'>
          Build PC
        </Link>
      </div>
    </div>
  )
}
