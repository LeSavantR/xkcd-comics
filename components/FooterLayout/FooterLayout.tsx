import React from 'react'
import { Container, Link, Row, Text } from '@nextui-org/react'

export interface FooterLayoutInterface {}

const FooterLayout : React.FC<FooterLayoutInterface> = () => {
	return (
    <Container css={{ p: '$16' }} as='footer' responsive>
      <Row justify='center' align='center'>
        <Text>
          <Link href='https://xkcd.com' target={'_blank'} rel={'noopener noreferrer'}>
            All Comics XKCD
          </Link>
        </Text>
      </Row>
    </Container>
  )
}

export default FooterLayout
