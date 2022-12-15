import { getRobots } from './../libs/getRobots'
import { ContentPageLayout } from './../components/layouts'
import { RobotCard } from '../components/robots'

function CombatRobotsPage({combatBots}) {
    return ( 
        <>
            { combatBots.map(bot => 
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

export default CombatRobotsPage;

CombatRobotsPage.getLayout = function getLayout(page) {
    return (
        <ContentPageLayout 
            type="Combat Robots"
            title="For those nasty invaders..."
            tagline="Our Available Combat robots ship as soon as you place the order!"
            supportTagline="Our Unavailable Combat robots ship within 2 months!"
        >
            {page}
        </ContentPageLayout>
    )
}

export async function getStaticProps(content){
    const robots = await getRobots();
    const combatRobots = robots.filter(bot => bot.type === "Combat Robot");
    return {
        props: {
            combatBots: combatRobots
        }
    }
}