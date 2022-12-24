import React from "react"
import { PageLayout } from "@c/PageLayout"
import { Heading } from "@c/Heading"
import { ModeButton } from "@c/ModeButton"
import { Card, Container, Row, Text } from "@nextui-org/react"
import Image from "next/image"
import { Comic } from "@m/Comic.model"

export interface ComicInterface {
  props?: Comic
  id: number
  img: string
  alt: string
  title: string
  width: number
  height: number
  children?: React.ReactNode
}

const Comic: React.FC<ComicInterface> = ({ id, img, alt, title,width, height }) => {
  return (
    <PageLayout title="XKCD - Comic">
      <Heading>
        <ModeButton />
      </Heading>
      <Container>
        <Card>
          <Card.Header>
            <Row justify="center" align="center">
              <Text>
                {title}
              </Text>
            </Row>
          </Card.Header>
          <Card.Body>
            <Image src={img} alt={alt} width={width} height={height} />
          </Card.Body>
        </Card>
      </Container>
    </PageLayout>
  )
}

export default Comic