import { getRobots } from './../libs/getRobots'
import { ContentPageLayout } from '../components/layouts'
import { RobotCard } from '../components/robots'

function CatsPage({cats}) {
    return ( 
        <>
            { cats.map(bot => 
                <RobotCard
                    key={bot.id} 
                    avatar={bot.avatar} 
                    type={bot.type}
                    name={bot.name} 
                    manufacturerName={bot.manufacturerName}
                    manufacturerEmail={bot.manufacturerEmail}
                    manufacturerPhone={bot.manufacturerPhone}
                    manufacturerWebsite={bot.manufacturerWebsite}
                    robotUsername={bot.robotUsername}
                    birthCountry={bot.birthCountry}
                    birthState={bot.birthState}
                    birthCity={bot.birthCity}
                    birthDate={bot.birthDate}
                    price={bot.price}
                    available={true}
                />) 
            }
        </>
    );
}

export default CatsPage;

CatsPage.getLayout = function getLayout(page) {
    return (
        <ContentPageLayout 
            type="Virtual Cats"
            title="A faithful companion..."
            tagline="Our virtual cats download instantly to your Metaverse account!"
            supportTagline="All you need is your account and password!"
        >
            {page}
        </ContentPageLayout>
    )
}

export async function getStaticProps(content){
    const robots = await getRobots();
    const cats = robots.filter(bot => bot.type === "Cats");
    return {
        props: {
            cats: cats
        }
    }
}