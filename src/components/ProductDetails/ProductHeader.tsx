import { IProduct } from '@/server/modules/products/products.interface'
import Img from '@/ui/Img'
import { formatCategory, formatCurrency, formatObjKey } from '@/utils/formatProductValues'
import { BsStarFill } from 'react-icons/bs'

interface Props {
  product: IProduct
}

export default function ProductHeader({ product }: Props) {
  return (
    <header className='py-20 px-5 flex gap-20 flex-col md:flex-row items-center justify-center'>
      <div className='w-full max-w-sm md:max-w-md md:w-2/5'>
        <Img src={product?.image} alt={product?.name} />
      </div>
      <div className='w-full md:w-3/5'>
        <h3 className='text-2xl md:text-3xl text-primary'>{product?.name}</h3>
        <p className='px-5 py-2 rounded-full bg-info text-white inline-block my-5'>
          {formatCategory(product?.category)}
        </p>
        <h4 className='text-xl md:text-2xl'>
          <b className='mr-2'>Price:</b> {formatCurrency(product?.price)}
        </h4>
        <ul className='py-2'>
          {Object.entries(product?.keyFeatures)?.map(([key, value]) => (
            <li key={key} className='pb-3 text-xl'>
              <b>{formatObjKey(key)}:</b> {value}
            </li>
          ))}
        </ul>
        <div className='flex items-center gap-10'>
          <div className='flex items-center text-xl'>
            <p className='mr-2 font-bold'>Average rating:</p>
            <div className='flex gap-1 items-center text-orange-500'>
              <BsStarFill />
              <p>{product?.averageRating}</p>
            </div>
          </div>
          <p className='text-xl italic rounded-full border-[1px] border-gray-400 px-3 py-1'>{product?.status}</p>
        </div>
        <a href='#details' className='mt-5 inline-block underline underline-offset-4 text-xl link-primary'>
          See more details
        </a>
      </div>
    </header>
  )
}
