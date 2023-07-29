import { IProduct } from '@/server/modules/products/products.interface'
import Img from '@/ui/Img'
import { formatCategory, formatCurrency } from '@/utils/formatProductValues'
import Link from 'next/link'
import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'

interface Props {
  product: IProduct
}

export default function FeaturedProductCard({ product }: Props) {
  return (
    <div className='p-2'>
      <div className='shadow-xl h-full rounded-md relative'>
        <Img src={product?.image} alt={product?.name} />
        <div className='p-5'>
          <div className='flex justify-between items-center'>
            <h4 className='text-primary text-xl font-medium'>{product?.name}</h4>
            <p className='w-max-content ml-3'>{product?.status}</p>
          </div>
          <div className='flex justify-between items-center py-6'>
            <span className='py-1.5 px-5 rounded-full text-white bg-info inline-block'>
              {formatCategory(product?.category)}
            </span>
            <p className='text-xl'>{formatCurrency(product?.price)}</p>
          </div>
          <p className='flex items-center gap-1 text-lg text-orange-500 absolute top-5 right-2 bg-white px-5 py-1.5 rounded-full'>
            <BsFillStarFill /> {product?.averageRating}
          </p>
          <Link href={`/product/${product?._id}`} className='btn btn-primary px-10'>
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
