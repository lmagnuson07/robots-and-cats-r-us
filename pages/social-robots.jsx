import { getRobots } from './../libs/getRobots'
import { ContentPageLayout } from './../components/layouts'
import { RobotCard } from '../components/robots'

function SocialRobotsPage({socialRobots}) {
    return ( 
        <>
            { socialRobots.map(bot => 
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

export default SocialRobotsPage;

SocialRobotsPage.getLayout = function getLayout(page) {
    return (
        <ContentPageLayout 
            type="Social Robots"
            title="To keep you company..."
            tagline="Our Available Social robots ship as soon as you place the order!"
            supportTagline="Our Unavailable Social robots ship within 1 month!"
        >
            {page}
        </ContentPageLayout>
    )
}

export async function getStaticProps(content){
    const robots = await getRobots();
    const socialRobots = robots.filter(bot => bot.type === "Social Robots");
    return {
        props: {
            socialRobots: socialRobots
        }
    }
}