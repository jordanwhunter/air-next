// Dependencies
import Head from 'next/head';

// Components
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';

export default function Home({ exploreData, liveAnywhereData }) {
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
            {exploreData?.map((item) => (
              <SmallCard
                key={Math.random().toString(36).substr(2, 9)} 
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className='
            text-4xl
            font-semibold
            py-8
          '>
            Live Anywhere
          </h2>

          <div className='
            flex
            space-x-3
            overflow-scroll
            scrollbar-hide
            p-3
            ml-5
            mr-5
          '>
            {liveAnywhereData?.map((item) => (
              <MediumCard 
                key={Math.random().toString(36).substr(2, 9)}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </section>

        <section>
          <LargeCard 
            img='https://links.papareact.com/4cj'
            title='The Greatest Outdoors'
            description='Wishlists curated by Airbnb'
            buttonText='Get Inspired'
          />
        </section>
      </main>

      
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp')
  .then((res) => res.json());

  const liveAnywhereData = await fetch('https://links.papareact.com/zp1')
  .then((res) => res.json());

  // returns the fetched data above to the client side 
  return {
    props: {
      exploreData: exploreData,
      liveAnywhereData: liveAnywhereData
    }
  };
};
