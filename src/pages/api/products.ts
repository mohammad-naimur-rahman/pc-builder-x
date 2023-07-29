import { Product } from './../../server/modules/products/products.model'
import dbConnect from '@/server/lib/DBConnect'
import { IProduct } from '@/server/modules/products/products.interface'
import { IResponse } from '@/server/types/ResponseType'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      res.status(200).json({ name: 'Naimur' })
      break
    case 'POST':
      try {
        const createdProduct = await Product.create(req.body)
        if (!createdProduct) {
          throw new Error('Product creation failed')
        }
        const response: IResponse<IProduct> = {
          success: true,
          statusCode: 201,
          message: 'Product creatied successfully!',
          data: createdProduct,
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
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
