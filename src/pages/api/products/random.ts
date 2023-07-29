import dbConnect from '@/server/lib/DBConnect'
import { IProduct } from '@/server/modules/products/products.interface'
import { Product } from '@/server/modules/products/products.model'
import { IResponse } from '@/server/types/ResponseType'
import { NextApiRequest, NextApiResponse } from 'next'
import categories from '@/data/category.json'

interface ICategory {
  id: number
  label: string
  value: string
}

function getCategoryNames(randomCategoryIds: number[], categoryJSON: ICategory[]): string[] {
  const categoryNames: string[] = []

  randomCategoryIds.forEach((categoryId: number) => {
    const category = categoryJSON.find(item => item.id === categoryId)
    if (category) {
      categoryNames.push(category.value)
    }
  })

  return categoryNames
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const totalCategories = 7
        const productsPerCategory = 1
        const totalProducts = 6

        const randomCategories = new Set()

        while (randomCategories.size < totalProducts) {
          randomCategories.add(Math.floor(Math.random() * totalCategories) + 1)
        }

        const randomCategoriesArray = Array.from(randomCategories) as number[]
        const categoryNames = getCategoryNames(randomCategoriesArray, categories)

        const randomProducts = await Product.aggregate([
          {
            $match: {
              category: { $in: categoryNames },
            },
          },
          {
            $sample: { size: totalProducts },
          },
        ])

        const response: IResponse<Array<IProduct>> = {
          success: true,
          statusCode: 200,
          message: 'Product retrieved successfully!',
          data: randomProducts,
        }

        res.status(201).json(response)
      } catch (err) {
        const response: IResponse<null> = {
          success: false,
          statusCode: 400,
          message: (err as { message: string }).message,
          data: null,
        }
        res.status(400).json(response)
      }
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
