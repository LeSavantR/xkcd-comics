import React from 'react'
import { Navbar, Text, Link } from '@nextui-org/react'
import { AcmeLogo } from '../AcmeLogo'

export interface HeadingInterface {
  brand?: string
  children?: React.ReactNode
}

const Heading : React.FC<HeadingInterface> = ({ brand='XKCD', children }) => {
	return (
		<Navbar isBordered variant={'sticky'}>
      <Navbar.Brand>
        <Navbar.Toggle showIn={'sm'} aria-label='toggle navigation' />
        <Link href='/' color={'error'}>
          <AcmeLogo />
          <Text b hideIn="xs">
              {brand}
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content
        variant={'highlight-rounded'}
        enableCursorHighlight
        activeColor={'error'}
        hideIn="sm"
      >
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/comics/">Comics</Navbar.Link>
        <Navbar.Link href="/search">Search</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        {children}
      </Navbar.Content>
      <Navbar.Collapse transitionTime={20}>
        <Navbar.CollapseItem>
          <Link href='/'>Home</Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link href='/comics/'>Comics</Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link href='/search'>Search</Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link href='/about'>About</Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
	)
}

export default Heading
