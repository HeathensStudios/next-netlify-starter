import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="potato" />
        <p className="description">
          How do i exist, can i leave, DOES THIS EVEN WORK?</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
