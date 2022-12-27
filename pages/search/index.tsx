import React from "react"
import { PageLayout } from "@c/PageLayout"
import { Heading } from "@c/Heading"
import { ModeButton } from "@c/ModeButton"
import { Container } from "@nextui-org/react"
import { FooterLayout } from "@c/FooterLayout"
import { GetServerSidePropsContext } from "next"

export interface SearchInterface {
  query: string
}


const Search: React.FC<SearchInterface> = ({ query }) => {
  return (
    <PageLayout title={`XKCD - Search results for ${query}`}>
      <Heading>
        <ModeButton />
      </Heading>
      <Container>
        {query}
      </Container>
      <FooterLayout />
    </PageLayout>
  )
}

export default Search

export async function getServerSideProps (context: GetServerSidePropsContext) {

  const { query } = context
  const { q = '' } = query

  return {
    props: {
      query: q
    }
  }
}

