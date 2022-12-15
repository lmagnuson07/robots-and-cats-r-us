import { getRobots } from './../libs/getRobots'
import { ContentPageLayout } from './../components/layouts'
import { RobotCard } from '../components/robots'

function ServiceRobotsPage({serviceBots}) {
    return ( 
        <>
            { serviceBots.map(bot => 
                <RobotCard
                    key={bot.id} 
                    id={bot.id}
                    avatar={bot.avatar} 
                    type={bot.type}
                    fullName={bot.fullName} 
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
                    available={bot.available}
                />) 
            }
        </>
    );
}

export default ServiceRobotsPage;

ServiceRobotsPage.getLayout = function getLayout(page) {
    return (
        <ContentPageLayout 
            type="Service Robots"
            title="For those pesky chores..."
            tagline="Our Available Service robots ship as soon as you place the order!"
            supportTagline="Our Unavailable Service robots ship within 2 weeks!"
        >
            {page}
        </ContentPageLayout>
    )
}

export async function getStaticProps(content){
    const robots = await getRobots();
    const serviceRobots = robots.filter(bot => bot.type === "Service Robot");
    return {
        props: {
            serviceBots: serviceRobots
        }
    }
}