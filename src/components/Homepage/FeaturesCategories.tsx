import Heading from '@/ui/Heading'
import React from 'react'
import { categories } from '@/data/categories'
import Link from 'next/link'
import FeaturedCategoryCard from './FeaturedCategoryCard'

export default function FeaturesCategories() {
  const featuredCategories = categories?.filter(category => category.value !== 'others')
  return (
    <section className='py-20'>
      <Heading title='Featured Categories' subtitle='Choose your desired product from featured categories' />
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'>
        {featuredCategories?.map(category => (
          <FeaturedCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}
