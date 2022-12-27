// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import algoliasearch from 'algoliasearch/lite'

const client = algoliasearch('', '')
const index = client.initIndex('')

type Data = {}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  let { query: { q } } = req
  const { hits } = await index.search(q = '', {
    attributesToRetrieve: ['id', 'title', 'img', 'alt'],
    hitsPerPage: 10
  })

  res.status(200).json(hits)
}
