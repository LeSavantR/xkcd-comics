import algoliasearch from "algoliasearch/lite"

const client = algoliasearch('G0TMFTILX0', '7055e579fd91d0bdbf30dd68cbf89597')
const index = client.initIndex('prod_comics')


export const search = async (query: any) => {
  const { hits } = await index.search(query, {
    attributesToRetrieve: ['id', 'title', 'img', 'alt'],
    hitsPerPage: 12
  })
  return { results: hits }
}
