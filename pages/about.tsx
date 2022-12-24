import React from "react"
import { PageLayout } from "@c/PageLayout"
import { Heading } from "@c/Heading"
import { ModeButton } from "@c/ModeButton"

export interface AboutInterface {}


const About: React.FC<AboutInterface> = () => {
  return (
    <PageLayout title="XKCD - About">
      <Heading>
        <ModeButton />
      </Heading>
    </PageLayout>
  )
}

export default About
