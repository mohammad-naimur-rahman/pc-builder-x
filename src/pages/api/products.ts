import dbConnect from '@/server/lib/DBConnect'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      res.status(200).json({ name: 'Naimur' })
      break
    case 'POST':
      console.log(req.body)
      res.status(201).json({ name: 'Naimur' })
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
