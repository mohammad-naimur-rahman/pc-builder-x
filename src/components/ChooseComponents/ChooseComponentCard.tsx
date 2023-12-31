import { addToComponentsList } from '@/redux/features/componentsSlice'
import { useAppDispatch } from '@/redux/hooks'
import { IProduct } from '@/server/modules/products/products.interface'
import Img from '@/ui/Img'
import { formatCategory, formatCurrency } from '@/utils/formatProductValues'
import { useRouter } from 'next/router'
import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'

interface Props {
  product: IProduct
}

export default function ChooseComponentCard({ product }: Props) {
  const { push } = useRouter()
  const dispatch = useAppDispatch()

  const chooseProduct = () => {
    dispatch(addToComponentsList(product))
    push('/pc-builder')
  }

  return (
    <div className='p-2'>
      <div className='shadow-xl rounded-md flex flex-col md:flex-row items-center p-3 gap-10 justify-between'>
        <div className='flex flex-col sm:flex-row items-center gap-6'>
          <Img src={product?.image} alt={product?.name} className='max-w-[250px] h-auto' />
          <div className='flex flex-col gap-2'>
            <h4 className='text-primary text-xl font-medium'>{product?.name}</h4>
            <p className='w-max-content'>Satus: {product?.status}</p>
            <p className='py-1.5 px-5 rounded-full text-white bg-info inline-block self-start'>
              {formatCategory(product?.category)}
            </p>
            <p className='flex items-center gap-1 text-lg text-orange-500 rounded-full'>
              Rating: <BsFillStarFill /> {product?.averageRating}
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-3 items-center'>
          <p className='text-xl'>{formatCurrency(product?.price)}</p>
          <button className='btn btn-primary px-10' onClick={chooseProduct}>
            Add to builder
          </button>
        </div>
      </div>
    </div>
  )
}
