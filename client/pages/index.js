// Dependencies
import Head from 'next/head';

// Components
import Header from '../components/Header';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb: Clone</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <Banner />

      
    </div>
  )
}
