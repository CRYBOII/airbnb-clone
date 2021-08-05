import Head from "next/head"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import LargeCard from "../components/LargeCard"
import MediumCard from "../components/MediumCard"
import SmallCard from "../components/SmallCard"

export default function Home({ exploreData, cardsData }) {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto'>
        <section className='pt-6'>
          <h2 className='text-4xl font-bold pb-5'>Explore nearby</h2>
          <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4'>
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section className='pt-6'>
          <h2 className='text-4xl font-bold pb-5'>Live Anywhere</h2>
          <div className='flex space-x-6 overflow-scroll p-3 -ml-3 scrollbar-hide'>
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img='/images/2da67c1c-0c61-4629-8798-1d4de1ac92914.jpg'
          buttonText='Get inspired'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb.'
        />
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const exploreData = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/exploreData`
  ).then((x) => x.json())
  const cardsData = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/anyWhere`
  ).then((x) => x.json())

  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}
