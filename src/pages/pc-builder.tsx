import ChooseCard from '@/components/ChooseComponents/ChooseCard'
import { categories } from '@/data/categories'
import { useAppSelector } from '@/redux/hooks'
import Heading from '@/ui/Heading'
import Layout from '@/ui/Layout'
import { formatCurrency } from '@/utils/formatProductValues'
import React, { ReactElement } from 'react'
import { toast } from 'react-hot-toast'

// interface Products {
//   category: string
//   products: Array<IProduct>
// }

// interface Props {
//   productsByCategory: Array<Products>
// }

export default function PcBuilderPage() {
  const { components, totalPrice } = useAppSelector(state => state.components)

  const onSuccessBuild = () => {
    toast.success('PC Built successfully!')
  }

  return (
    <main className='py-10'>
      <Heading title='PC Builder' subtitle='Build your dream PC now!' />
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex flex-col'>
          {categories.map(category => (
            <ChooseCard key={category.id} category={category} components={components} />
          ))}
        </div>
        <p className='text-right py-5 text-xl'>Total: {formatCurrency(totalPrice)}</p>
        <div className='flex justify-end pb-10'>
          <button
            className='btn btn-success text-right'
            type='button'
            disabled={components.length !== 7}
            onClick={onSuccessBuild}>
            Complete Build
          </button>
        </div>
      </div>
    </main>
  )
}

PcBuilderPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='PC Builder | PC Builder X'>{page}</Layout>
}

// export async function getServerSideProps() {
//   const promises = categories.map(async category => {
//     const response = await axios.get(`${API_URL}/products?category=${category.value}`)
//     return { category: category.label, products: response?.data?.data }
//   })

//   try {
//     const productsByCategory = await Promise.all(promises)
//     return {
//       props: {
//         productsByCategory,
//       },
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error)
//     return {
//       props: {
//         productsByCategory: [],
//       },
//     }
//   }
// }
