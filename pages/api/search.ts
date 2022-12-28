// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { search } from '@services/search'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const { query: { q } } = req
  const { results } = await search(q)

  return res.status(200).json(results)
}
