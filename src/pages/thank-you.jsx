import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thanks for getting in touch - Mulberry House Software</title>
        <meta
          name="description"
          content="Thanks for getting in touch."
        />
      </Head>
      <SimpleLayout
        title="Thanks for getting in touch."
        intro="We'll be in touch shortly."
      />
    </>
  )
}
