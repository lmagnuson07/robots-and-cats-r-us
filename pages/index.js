import Head from 'next/head'  
import { LandingPageHeader } from '../components/headers'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cats and Robots 'R Us</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <LandingPageHeader 
          title="Do you have a problem, hassle, or inconvenience?"
          tagline="We have a Robot for that!!"
          imgSrc="/img/logo.png"
          imgAlt="Cats and Robots 'R Us logo"
          imgWidth="640"
          imgHeight="240"
        />
        <section className="container mx-auto p-8 text-6xl font-bold ">
          <h2>About us</h2>
          <p className="w-[fit-content] my-10 md:my-24 max-w-3xl mx-3 sm:text-2xl text-lg text-center">
            Purchase a robot for any of your personal needs or select from our large range of virtual cats, all of which will accompany you in the metaverse!
          </p>
        </section>
      </main>
    </>
  )
}
