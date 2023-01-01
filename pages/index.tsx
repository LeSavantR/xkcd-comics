import React from 'react'

import fs from 'fs/promises'

import Link from 'next/link'
import { GetStaticPropsContext } from 'next'

import { Card, Container, Grid, Row, Spacer, Text, Image } from '@nextui-org/react'

import { PageLayout } from '@c/PageLayout'
import { Heading } from '@c/Heading'
import { ModeButton } from '@c/ModeButton'
import { Comic } from '@m/Comic.model'
import { FooterLayout } from '@c/FooterLayout'
import { search } from '@services/search'


export interface HomeInterface {
  results: Comic[]
}


const Home: React.FC<HomeInterface> = ({ results }) => {
  return (
    <PageLayout title='XKCD - Home'>
      <Heading>
        <ModeButton />
      </Heading>
      <Container responsive css={{ 'maxWidth': '85vw'}}>
        <Spacer y={5} />
        <Row justify='center' align='center'>
          <Text h2 size='$3xl' weight='bold'>Latest Comics</Text>
        </Row>
        <Spacer y={5} />
        <Grid.Container gap={4} justify='center' css={{ 'padding': '0 auto'}}>
          {results.map((comic) => (
            <Grid key={comic.id} xs={12} sm={6} md={2} justify={'center'}>
              <Link href={`/comics/${comic.id}`}>
                <Card isPressable isHoverable variant='shadow' borderWeight='bold'>
                  <Card.Body css={{ p: 12 }}>
                    <Card.Image objectFit='cover' alt={comic.alt} src={comic.img} />
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
  const { results } = await search('')
  return {
    props: {
      results
    }
  }
}
