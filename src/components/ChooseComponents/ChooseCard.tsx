import { Component, removeFromComponentsList } from '@/redux/features/componentsSlice'
import { useAppDispatch } from '@/redux/hooks'
import { ICategory } from '@/types/globalTypes'
import Img from '@/ui/Img'
import { formatCategory, formatCurrency } from '@/utils/formatProductValues'
import Link from 'next/link'
import React from 'react'
import { BsStarFill, BsX } from 'react-icons/bs'

interface Props {
  category: ICategory
  components: Array<Component>
}

export default function ChooseCard({ category, components }: Props) {
  const { id, icon, label, value } = { ...category }
  const component = components.find(component => component.category === value)
  const dispatch = useAppDispatch()
  return (
    <div key={id} className='flex items-center justify-between border-2 border-gray-400 rounded-md my-2 p-4'>
      <div className='flex items-center gap-5 w-7/8'>
        <div className='flex items-center gap-2 w-40'>
          <span className='text-3xl'>{icon}</span>
          <span className='text-xl ml-3'>{label}</span>
        </div>
        {component ? (
          <div className='flex gap-2'>
            <Img src={component?.component?.image} alt={component?.component?.name} className='w-12' />
            <div>
              <p>{component?.component?.name}</p>
              <p className='flex items-center'>
                {formatCurrency(component?.component?.price)} | {formatCategory(component?.component?.category)} |{' '}
                <span className='flex items-center mx-2 gap-1 text-orange-500'>
                  {component?.component?.averageRating} <BsStarFill />
                </span>{' '}
                | {component?.component?.status}
              </p>
            </div>
          </div>
        ) : null}
      </div>
      <div className='w-1/8'>
        {component ? (
          <BsX
            className='text-4xl my-2 mr-6 inline-block cursor-pointer'
            onClick={() => dispatch(removeFromComponentsList(component.component))}
          />
        ) : (
          <Link href={`/choose-components/${value}`} className='btn btn-primary'>
            Choose
          </Link>
        )}
      </div>
    </div>
  )
}
