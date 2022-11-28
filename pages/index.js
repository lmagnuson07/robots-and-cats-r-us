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
        <section className="mx-auto selection:text-6xl font-bold">
          <div className="bg-gray-200 shadow">
            <div className="container m-auto">
              <h2 className="w-fit lg:pl-72 m-auto lg:m-0 text-indigo-600 font-rockwell text-shadow-sm md:text-7xl text-5xl text-center px-4 py-16 md:py-32">About us . . .</h2>
            </div>
          </div>
          <div className="py-20 bg-gray-900">
            <section className="container pt-4 pb-16 px-4 mx-auto text-center">
              <h3 className="text-4xl py-4 font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">Who We Are</h3>
              <div class="m-auto w-fit">
                <p className="w-[fit-content] pt-6 lg:text-2xl lg:px-8 my-6 max-w-6xl text-lg font-normal text-gray-700 dark:text-gray-400">
                  Robots and Cats 'R Us is a fictitious robot retailer based in the year 2100, where there are as many robots as there are humans, and the main source of entertainment for most of the population is the Metaverse.
                </p>
                <p className="w-[fit-content] pt-6 lg:text-2xl lg:px-8 my-6 max-w-6xl text-lg font-normal text-gray-700 dark:text-gray-400">
                  All robots can be connected to the Metaverse using their usernames and can accompany you in your journeys through the Metaverse with a more humanlike appearance.
                </p>
                <p className="w-[fit-content] pt-6 lg:text-2xl lg:px-8 my-6 max-w-6xl text-lg font-normal text-gray-700 dark:text-gray-400">
                  Robots and Cats 'R Us also has a large range of virtual cats that will be your faithful companions as you journey through the Metaverse (just don't pet them too much, or they might scratch you).
                </p>
              </div>
            </section>

            <section className="container px-4 mx-auto text-center">
              <h3 className="text-4xl py-4 font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">Our Products</h3>
              <p className="w-[fit-content] lg:text-2xl my-6 max-w-3xl mx-auto text-lg text-center font-normal text-gray-700 dark:text-gray-400">
                Select from a wide range of robots for any of your personal needs or adopt one of our virtual cats, all of which will accompany you in the metaverse!
              </p>
              <div className="lg:flex lg:flex-wrap lg:gap-2 lg:mt-24">
                <section className="container pt-4 px-4 mx-auto text-center lg:w-[calc(50%-1rem)]">
                  <h4 className="text-3xl py-4 font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">Service Robots</h4>
                  <p className="w-[fit-content] lg:text-xl my-6 max-w-3xl mx-auto text-lg text-center font-normal text-gray-700 dark:text-gray-400">
                    These robots can do all your chores at home for your, including cooking, cleaning, taking out the trash, walking your pets, babysitting, appliance repairs, and much more!
                  </p>
                </section>
                <section className="container pt-4 px-4 mx-auto text-center lg:w-[calc(50%-1rem)]">
                  <h4 className="text-3xl py-4 font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">Combat Robots</h4>
                  <p className="w-[fit-content] lg:text-xl my-6 max-w-3xl mx-auto text-lg text-center font-normal text-gray-700 dark:text-gray-400">
                    These robots will protect your family and loved ones from invaders and will put their own life on the line to keep you safe.
                  </p>
                </section>
                <section className="container pt-4 px-4 mx-auto text-center lg:w-[calc(50%-1rem)]">
                  <h4 className="text-3xl py-4 font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">Social Robots</h4>
                  <p className="w-[fit-content] lg:text-xl my-6 max-w-3xl mx-auto text-lg text-center font-normal text-gray-700 dark:text-gray-400">
                    These robots will keep you company by playing board games, card games, or video games with you, accompanying you on your errands, or carrying things for you.
                  </p>
                </section>
                <section className="container pt-4 px-4 mx-auto text-center lg:w-[calc(50%-1rem)]">
                  <h4 className="text-3xl py-4 font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">Cats</h4>
                  <p className="w-[fit-content] lg:text-xl my-6 max-w-3xl mx-auto text-lg text-center font-normal text-gray-700 dark:text-gray-400">
                    Our adorable virtual cats behave exactly like real cats, but in the Metaverse. They will never stray too far away from you and will warn you of danger.
                  </p>
                </section>
              </div>

            </section>
          </div>
          
        </section>

        <section className="mx-auto selection:text-6xl font-bold">
          <div className="bg-gray-200 shadow">
              <div className="m-auto">
                <h2 className="lg:pl-72 m-auto lg:m-0 text-indigo-600 font-rockwell text-shadow-sm md:text-7xl text-5xl text-center px-4 py-16 md:py-32">About this website . . .</h2>
              </div>
          </div>
          <div className="py-20 bg-gray-900">
            <section className="container px-4 mx-auto text-center">
              <h3 className="text-4xl py-4 font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">Our Purpose</h3>
              <div class="m-auto w-fit">
                <p className="w-fit pt-6 lg:text-2xl lg:px-8 my-6 max-w-6xl text-lg font-normal text-gray-700 dark:text-gray-400">
                  The Robots and Cats 'R Us website is a fictitious CRUD e-commerce website for choosing your next robot (or virtual cat).   
                </p>
                <p className="w-fit lg:text-2xl lg:px-8 my-6 max-w-6xl text-lg font-normal text-gray-700 dark:text-gray-400">
                  Navigate to one of the product pages to browse our selection of Robots and Cats.
                </p>
                <p className="w-fit lg:text-2xl lg:px-8 my-6 max-w-6xl text-lg font-normal text-gray-700 dark:text-gray-400">
                  For educational and demonstration purposes, the user can perform all CRUD functionality; creating a new robot record, updating an existing robot record, or deleting a robot record (when a robot is "purchased").
                </p>
                <p className="w-fit lg:text-2xl lg:px-8 my-6 max-w-6xl text-lg font-normal text-gray-700 dark:text-gray-400">
                  Although this functionality wouldn't be necessary for a real e-commerce website, it is incorporated into this fictitious website to demonstrate my understanding of React and Next.js in a simple but fun CRUD application.
                </p>
              </div>
              
            </section>
          </div>
        </section>
      </main>
    </>
  )
}
