import Head from 'next/head'  
import { HeaderComponent } from '../components'

export default function Home() {
  return (
    <>

      <Head>
        <title>Cats and Robots 'R Us</title>
      </Head>
      <HeaderComponent 
        title="Robots and Cats 'R Us"
        tagline="Purchase a robot for any of your personal needs or select from our large range of virtual cats, all of which will accompany you in the metaverse!"
        imgSrc="img/logo.png"
        imgAlt="Cats and Robots 'R Us logo"
        imgWidth="640"
        imgHeight="240"
      />
    </>
  )
}
