import React from 'react'
import fs from 'fs/promises'
import { Card, Container, Grid, Row, Spacer, Text } from '@nextui-org/react'
import { GetStaticPropsContext } from 'next'
import { PageLayout } from '@c/PageLayout'
import { Heading } from '@c/Heading'
import { ModeButton } from '@c/ModeButton'
import { Comic } from '@m/Comic.model'
import Image from 'next/image'
import Link from 'next/link'

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
        <Row justify='center' align='center'>
          <Spacer y={5} />
          <Text h2 size='$3xl' weight='bold'>Latest Comics</Text>
        </Row>
        <Grid.Container gap={4} justify={'center'}>
          {latestComics.map((comic) => (
              <Grid key={comic.id}>
                <Card isPressable isHoverable variant='bordered'>
                  <Card.Body>
                    <Link href={`/comics/${comic.id}`}>
                      <Image width={320} height={240} alt={comic.alt} src={comic.img} />
                    </Link>
                  </Card.Body>
                  <Card.Footer>
                    <Row justify='center' align='center'>
                      <Text h6>
                        {comic.title}
                      </Text>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            ))}
        </Grid.Container>
      </Container>
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
