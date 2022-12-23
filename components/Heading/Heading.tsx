import React from 'react';
import { Navbar, Text } from '@nextui-org/react';
import { AcmeLogo } from '../AcmeLogo';
import { ModeButton } from '..';

export interface HeadingInterface {
  brand?: string
  children?: React.ReactNode
}

const Heading : React.FC<HeadingInterface> = ({ brand='XKCD', children }) => {
	return (
		<Navbar isBordered variant={'sticky'}>
      <Navbar.Brand>
        <AcmeLogo />
        <Text b color="inherit" hideIn="xs">
          {brand}
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link isActive href="/">Home</Navbar.Link>
        <Navbar.Link href="/comics/">Comics</Navbar.Link>
        <Navbar.Link href="/search">Search</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        {children}
      </Navbar.Content>
      <Navbar.Content>
        <ModeButton />
      </Navbar.Content>
    </Navbar>
	);
};

export default Heading;
