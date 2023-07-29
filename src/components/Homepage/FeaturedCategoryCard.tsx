import { ICategory } from '@/types/globalTypes'
import Link from 'next/link'
import React from 'react'

interface Props {
  category: ICategory
}

export default function FeaturedCategoryCard({ category }: Props) {
  const { value, label, icon } = category
  return (
    <Link href={`/products/${value}`} className='p-2'>
      <div className='shadow-lg flex flex-col p-5 justify-center items-center'>
        <span className='text-5xl'>{icon}</span>
        <h3 className='pt-5 text-center text-xl font-light'>{label}</h3>
      </div>
    </Link>
  )
}
