import { Heading, PageLayout } from '@c/index'
import { Card, Container, Row, Text } from '@nextui-org/react'
import { GetStaticPropsContext } from 'next'
import fs from 'fs/promises'
import React from 'react'

export interface Comic {
  id: number
  month: string
  link: string
  year: string
  safe_title: string
  alt: string
  img: string
  title: string
  days: string
}

export interface HomeInterface {
  latestComics: Comic[]
}

const Home: React.FC<HomeInterface> = ({ latestComics }) => {
  return (
    <PageLayout title='XKCD - Home'>
      <Heading />
      <Container>
        <Card css={{ $$cardColor: '$colors$primary' }}>
          <Card.Body>
            <Row justify="center" align="center">
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                NextUI gives you the best developer experience with all the features
                you need for building beautiful and modern websites and
                applications.
              </Text>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </PageLayout>
  )
}

export default Home

export async function getStaticProps (ctx: GetStaticPropsContext) {
  const files = await fs.readdir('./comics')
  const latestComicsFiles = files.slice(0, 5)

  const promisesReadFiles: Promise<Comic>[] = latestComicsFiles.map(async (file) => {
    const content = await fs.readFile(`./comics/${file}`, 'utf-8')
    return JSON.parse(content)
  })

  const latestComics = await Promise.all(promisesReadFiles)
  return {
    props: {
      latestComics
    }
  }
}
