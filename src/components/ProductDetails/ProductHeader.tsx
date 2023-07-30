import { IProduct } from '@/server/modules/products/products.interface'
import Img from '@/ui/Img'
import { formatCategory, formatCurrency, formatObjKey } from '@/utils/formatProductValues'
import { BsStarFill } from 'react-icons/bs'

interface Props {
  product: IProduct
}

export default function ProductHeader({ product }: Props) {
  const { image, name, averageRating, category, keyFeatures, price, status } = { ...product }
  return (
    <header className='py-20 flex items-center'>
      <div className='w-2/5'>
        <Img src={image} alt={name} />
      </div>
      <div className='w-3/5 pl-20'>
        <h3 className='text-3xl text-primary'>{name}</h3>
        <p className='px-5 py-2 rounded-full bg-info text-white inline-block my-5'>{formatCategory(category)}</p>
        <h4 className='text-2xl pb-3'>
          <b className='mr-2'>Price:</b> {formatCurrency(price)}
        </h4>
        <ul className='py-2'>
          {Object.entries(keyFeatures).map(([key, value]) => (
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
              <p>{averageRating}</p>
            </div>
          </div>
          <p className='text-xl italic rounded-full border-[1px] border-gray-400 px-3 py-1'>{status}</p>
        </div>
        <a href='#details' className='mt-5 inline-block underline underline-offset-4 text-xl link-primary'>
          See more details
        </a>
      </div>
    </header>
  )
}
