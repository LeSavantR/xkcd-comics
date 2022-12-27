import React from "react"
import { PageLayout } from "@c/PageLayout"
import { Heading } from "@c/Heading"
import { ModeButton } from "@c/ModeButton"
import { Container } from "@nextui-org/react"
import { FooterLayout } from "@c/FooterLayout"

export interface AboutInterface {}


const About: React.FC<AboutInterface> = () => {
  return (
    <PageLayout title="XKCD - About">
      <Heading>
        <ModeButton />
      </Heading>
      <Container></Container>
      <FooterLayout />
    </PageLayout>
  )
}

export default About
