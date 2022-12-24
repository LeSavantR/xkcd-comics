import React from "react"
import { PageLayout } from "@c/PageLayout"
import { Heading } from "@c/Heading"
import { ModeButton } from "@c/ModeButton"

export interface SearchInterface {}


const Search: React.FC<SearchInterface> = () => {
  return (
    <PageLayout title='XKCD - Search'>
      <Heading>
        <ModeButton />
      </Heading>
    </PageLayout>
  )
}

export default Search
