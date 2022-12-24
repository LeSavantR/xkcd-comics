import React from 'react'
import { Navbar, Text, Link } from '@nextui-org/react'
import { AcmeLogo } from '../AcmeLogo'

export interface HeadingInterface {
  brand?: string
  children?: React.ReactNode
}

const Heading : React.FC<HeadingInterface> = ({ brand='XKCD', children }) => {
	return (
		<Navbar isBordered variant={'floating'}>
      <Navbar.Brand>
        <Link href='/'>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
              {brand}
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/comics/">Comics</Navbar.Link>
        <Navbar.Link href="/search">Search</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        {children}
      </Navbar.Content>
    </Navbar>
	)
}

export default Heading
