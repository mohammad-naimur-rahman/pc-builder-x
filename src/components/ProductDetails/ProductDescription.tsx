import { IProduct } from '@/server/modules/products/products.interface'
import { BsStarFill } from 'react-icons/bs'

interface Props {
  product: IProduct
}

export default function ProductDescription({ product }: Props) {
  const { name, reviews, description } = { ...product }
  return (
    <section id='details'>
      <h2 className='text-3xl text-primary pb-5'>Product description for {name}</h2>
      <h3 className='text-xl leading-loose text-justify'>{description}</h3>

      <h4 className='text-4xl pt-10 pb-5'>Reviews</h4>
      {reviews ? (
        <ul>
          {reviews?.map(review => (
            <li key={review?.review} className='flex flex-col gap-1 pb-5'>
              <div className='flex gap-10'>
                <span className='text-xl'>{review?.name}</span>
                <span className='flex items-center gap-1 text-orange-500'>
                  Rating: {review?.rating} <BsStarFill />
                </span>
              </div>
              <p className='text-lg italic'>{review?.review}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet</p>
      )}
    </section>
  )
}
