import Head from 'next/head'  
import { LandingPageHeader } from '../components/headers'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cats and Robots 'R Us</title>
      </Head>
      <main>
        <LandingPageHeader 
          tagline="Purchase a robot for any of your personal needs or select from our large range of virtual cats, all of which will accompany you in the metaverse!"
          imgSrc="/img/logo.webp"
          imgAlt="Cats and Robots 'R Us logo"
          imgWidth="640"
          imgHeight="240"
        />
      </main>
    </>
  )
}
