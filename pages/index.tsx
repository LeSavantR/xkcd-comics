import React from 'react'
import fs from 'fs/promises'
import { Card, Container, Grid, Row, Spacer, Text, Image } from '@nextui-org/react'
import { GetStaticPropsContext } from 'next'
import { PageLayout } from '@c/PageLayout'
import { Heading } from '@c/Heading'
import { ModeButton } from '@c/ModeButton'
import { Comic } from '@m/Comic.model'
import Link from 'next/link'
import { FooterLayout } from '@c/FooterLayout'

export interface HomeInterface {
  latestComics: Comic[]
}

const Home: React.FC<HomeInterface> = ({ latestComics }) => {
  return (
    <PageLayout title='XKCD - Home'>
      <Heading>
        <ModeButton />
      </Heading>
      <Container>
        <Spacer y={5} />
        <Row justify='center' align='center'>
          <Text h2 size='$3xl' weight='bold'>Latest Comics</Text>
        </Row>
        <Grid.Container gap={4} justify='center'>
          {latestComics.map((comic) => (
              <Grid key={comic.id} xs={2}>
                <Link href={`/comics/${comic.id}`}>
                  <Card isPressable isHoverable variant='bordered' borderWeight='bold'>
                    <Card.Body css={{ p: 12 }}>
                      <Image objectFit='cover' alt={comic.alt} src={comic.img} />
                    </Card.Body>
                    <Card.Footer isBlurred>
                      <Row justify='center' align='center'>
                        <Text h6>
                          {comic.title}
                        </Text>
                      </Row>
                    </Card.Footer>
                  </Card>
                </Link>
              </Grid>
            ))}
        </Grid.Container>
      </Container>
      <FooterLayout />
    </PageLayout>
  )
}

export default Home

export async function getStaticProps (_ctx: GetStaticPropsContext) {
  const files = await fs.readdir('./comics')
  const latestComicsFiles = files.slice(0, 12)

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
