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
        <title>Airbnb</title>
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
  const exploreData = [
    {
      img: "/images/471d6e78-8e18-403f-828d-8d573b37ba192.jpg",
      location: "Bangkok",
      distance: "45-minute drive",
    },
    {
      img: "/images/847cfb7f-788d-42dc-9148-f375348dde76.jpg",
      location: "Bangkok",
      distance: "45-minute drive",
    },
    {
      img: "/images/7253e011-7c22-48fd-b75d-d0da35372397.jpg",
      location: "Bangkok",
      distance: "45-minute drive",
    },
    {
      img: "/images/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg",
      location: "Bangkok",
      distance: "45-minute drive",
    },
    {
      img: "/images/e639b7ab-aee3-48ee-9743-216684a51319.jpg",
      location: "Bangkok",
      distance: "45-minute drive",
    },
    {
      img: "/images/7253e011-7c22-48fd-b75d-d0da353723973.jpg",
      location: "Bangkok",
      distance: "45-minute drive",
    },
    {
      img: "/images/52e8083e-2de2-446d-a860-534eab2505412.jpg",
      location: "Bangkok",
      distance: "45-minute drive",
    },
    {
      img: "/images/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg",
      location: "Bangkok",
      distance: "45-minute drive",
    },
  ]

  const cardsData = [
    {
      img: "/images/2f13349d-879d-43c6-83e3-8e5679291d532.jpg",
      title: "Outdoor getaways",
    },
    {
      img: "/images/36f53e61-db8d-403c-9122-5b761c0e42644.jpg",
      title: "Unique stays",
    },
    {
      img: "/images/7d82ca14-56e5-4465-8218-dcfa7d69b6ac4.jpg",
      title: "Entire homes",
    },
    {
      img: "/images/10a638e1-6aff-4313-8033-1275cec839875.jpg",
      title: "Pets allowed",
    },
  ]

  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}
