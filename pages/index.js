import Head from 'next/head'  
import { HomePageContentHeader, LandingPageHeader } from '../components/headers'
import { HomePageParagraph, HomePageH3, HomePageH4 } from '../components/content'
import { HomePageSection, HomePageInnerSection, HomePageProductSection } from '../components/layouts'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cats and Robots 'R Us</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="relative lg:top-[76px] top-[72px]">
        <LandingPageHeader 
          title="Do you have a problem, hassle, or inconvenience?"
          tagline="We have a Robot for that!!"
          imgSrc="/img/logo.png"
          imgAlt="Cats and Robots 'R Us logo"
          imgWidth="640"
          imgHeight="240"
        />
        
        <HomePageSection>
          <HomePageContentHeader
            title="About us"
            containerStyling="container"
            headingStyling="w-fit"
          />
          <HomePageInnerSection>
            <HomePageH3
              content="Who We Are"
            />
            <div className="m-auto w-fit flex flex-col items-center">
              <HomePageParagraph 
                content="Robots and Cats 'R Us is a fictitious robot retailer based in the year 2100, where there are as many robots as there are humans, and the main source of entertainment for most of the population is the Metaverse."
              />
              <HomePageParagraph 
                content="All robots can be connected to the Metaverse using their usernames and can accompany you in your journeys through the Metaverse with a more humanlike appearance."
              />
              <HomePageParagraph 
                content="Robots and Cats 'R Us also has a large range of virtual cats that will be your faithful companions as you journey through the Metaverse (just don't pet them too much, or they might scratch you)."
              />
            </div>
          </HomePageInnerSection>
        </HomePageSection>

        <HomePageSection>
          <HomePageContentHeader
            title="Our Products"
          />
          <HomePageInnerSection>
            <HomePageH3
              content="The Best Robots"
            />
            <HomePageParagraph 
              content="Select from a wide range of high quality robots for any of your personal needs or adopt one of our virtual cats, all of which will accompany you in the metaverse!"
              maxWidth="max-w-3xl"
            />

            <div className="lg:flex lg:flex-wrap lg:gap-2 mt-16">
              <HomePageProductSection>
                <HomePageH4 content="Service Robots" />
                  <HomePageParagraph 
                    smallText={true}
                    maxWidth="max-w-3xl"
                    content="These robots can do all your chores at home for your, including cooking, cleaning, taking out the trash, walking your pets, babysitting, appliance repairs, and much more!"
                  />
              </HomePageProductSection>
              <HomePageProductSection>
                <HomePageH4 content="Combat Robots" />
                  <HomePageParagraph 
                    smallText={true}
                    maxWidth="max-w-3xl"
                    content="These robots will protect your family and loved ones from invaders and will put their own life on the line to keep you safe."
                  />
              </HomePageProductSection>
              <HomePageProductSection>
                <HomePageH4 content="Social Robots" />
                <HomePageParagraph 
                  smallText={true}
                  maxWidth="max-w-3xl"
                  content="These robots will keep you company by playing board games, card games, or video games with you, accompanying you on your errands, or carrying things for you."
                />
              </HomePageProductSection>
              <HomePageProductSection>
                <HomePageH4 content="Virtual Cats" />
                <HomePageParagraph 
                  smallText={true}
                  maxWidth="max-w-3xl"
                  content="Our adorable virtual cats behave exactly like real cats, but in the Metaverse. They will never stray too far away from you and will warn you of danger."
                />
              </HomePageProductSection>
            </div>

          </HomePageInnerSection>
        </HomePageSection>

        <HomePageSection>
          <HomePageContentHeader
            title="About this website"
            containerStyling="container"
            headingStyling="w-fit" 
            paddingLeft="lg:pl-32"
          />
          <HomePageInnerSection>
            <HomePageH3
              content="Our Purpose"
            />
            <div className="m-auto w-fit flex flex-col items-center">
              <HomePageParagraph 
                content="The Robots and Cats 'R Us website is a fictitious CRUD e-commerce website for choosing your next robot (or virtual cat)."
              />
              <HomePageParagraph 
                content="Navigate to one of the product pages to browse our selection of Robots and Cats."
              />
              <HomePageParagraph 
                content='For educational and demonstration purposes, the user can perform all CRUD functionality; creating a new robot record, updating an existing robot record, or deleting a robot record (when a robot is "purchased").'
              />
              <HomePageParagraph 
                content="Although this functionality wouldn't be necessary for a real e-commerce website, it is incorporated into this fictitious website to demonstrate my understanding of React and Next.js in a simple but fun CRUD application."
              />
            </div>
          </HomePageInnerSection>
        </HomePageSection>

      </main>
    </>
  )
}
