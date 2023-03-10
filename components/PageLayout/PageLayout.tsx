import React from 'react'
import Head from 'next/head'

export interface PageLayoutInterface {
  title?: string
  children?: React.ReactNode
}

const PageLayout : React.FC<PageLayoutInterface> = ({ title='XKCD', children }) => {
	return (
		<>
      <Head>
        <meta name="description" content="Comics for developers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      <main>
        {children}
      </main>
		</>
	)
}

export default PageLayout
