import React from "react"
import { PageLayout } from "@c/PageLayout"
import { Heading } from "@c/Heading"
import { ModeButton } from "@c/ModeButton"
import { Button, Card, Container, Grid, Row, Spacer, Text } from "@nextui-org/react"
import Image from "next/image"
import { Comic } from "@m/Comic.model"
import { readFile, readdir, stat } from "fs/promises"
import Link from "next/link"
import { basename } from "path"

export interface ComicInterface {
  id: number
  img: string
  alt: string
  title: string
  width: number
  height: number
  hasNext: boolean
  nextId: number
  hasPrev: boolean
  prevId: number
  children?: React.ReactNode
}

const Comic: React.FC<ComicInterface> = ({ img, alt, title,width, height, hasPrev, prevId, hasNext, nextId }) => {
  return (
    <PageLayout title="XKCD - Comic">
      <Heading>
        <ModeButton />
      </Heading>
      <Container>
        <Spacer y={4} />
        <Row justify='center' align='center'>
          <Text h2 size='$3xl' weight='bold'>{title}</Text>
        </Row>
        <Spacer y={1} />
        <Grid>
          <Card css={{ mw: '800px', justifyContent: 'center', margin: '0 auto' }}>
            <Card.Body>
              <Grid.Container justify="center">
                <Image src={img} alt={alt} width={width} height={height} />
              </Grid.Container>
            </Card.Body>
            <Spacer y={1} />
            <Card.Footer>
              <Row justify="space-evenly">
                {hasPrev && <Link href={`/comics/${prevId}`}>◀️ Anterior</Link>}
                {hasNext && <Link href={`/comics/${nextId}`}>Siguiente ▶️</Link>}
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      </Container>
    </PageLayout>
  )
}

export default Comic

export async function getStaticPaths () {

  const files = await readdir('./comics')

  const paths = files.map(file => {
    const id = basename(file, '.json')
    return { params: { id } }
  })

  return {
    paths,
    fallback: false
  }
}

interface Params {
  params: {
    id: string
  }
}

export async function getStaticProps ({ params }: Params) {
  const { id } = params

  const content = await readFile(`./comics/${id}.json`, 'utf-8')
  const comic: Comic = JSON.parse(content)

  const idNumber = +id
  const prevId = idNumber - 1
  const nextId = idNumber + 1

  const [ prevRes, nextRes ] = await Promise.allSettled([
    stat(`./comics/${prevId}.json`),
    stat(`./comics/${nextId}.json`),
  ])

  const hasPrev = prevRes.status === 'fulfilled'
  const hasNext = nextRes.status === 'fulfilled'

  return {
    props: {
      ... comic,
      hasNext,
      nextId,
      hasPrev,
      prevId,
    }
  }
}
