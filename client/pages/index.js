// Dependencies
import Head from 'next/head';

// Components
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData }) {
  // to view data pulled from api: console.log(exploreData)
  return (
    <div>
      <Head>
        <title>Airbnb: Clone</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <Banner />

      <main className='
        max-w-7xl
        mx-auto
        px-8
        sm:px-16
      '>
        <section className='pt-6'>
          <h2 className='
            text-4xl
            font-semibold
            pb-5
          '>
            Explore Nearby
          </h2>

          {/* Pull data from a server through API endpoints */}
          {/* Multiple column additions within grid at breakpoints (EVERYTHING IS STYLED FIRST TO MOBILE) */}
          <div className='
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          '>
            {exploreData.map((item) => (
              <SmallCard
                key={Math.random().toString(36).substr(2, 9)} 
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
      </main>

      
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp')
  .then((res) => res.json());

  // returns the fetched data above to the client side 
  return {
    props: {
      exploreData: exploreData
    }
  };
};
