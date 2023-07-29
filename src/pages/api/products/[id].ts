import dbConnect from '@/server/lib/DBConnect'
import { IProduct } from '@/server/modules/products/products.interface'
import { Product } from '@/server/modules/products/products.model'
import { IResponse } from '@/server/types/ResponseType'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    query: { id },
  } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const retrievedProduct = await Product.findById(id)
        if (!retrievedProduct) {
          throw new Error('Product retrieve failed')
        }
        const response: IResponse<IProduct> = {
          success: true,
          statusCode: 200,
          message: 'Product retrieved successfully!',
          data: retrievedProduct,
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
