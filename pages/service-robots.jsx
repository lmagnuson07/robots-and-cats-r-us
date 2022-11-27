import path from 'path'
import { promises as fs } from 'fs'
import { ContentPageLayout } from './../components/layouts'
import { DeveloperCard } from './../components/developers'

function ServiceRobotsPage({serviceBots}) {
    return ( 
        <>
            { serviceBots.map(bot => 
                <DeveloperCard
                    key={bot.id} 
                    avatar={bot.avatar} 
                    type={bot.type}
                    name={bot.name} 
                    manufacturerName={bot.manufacturerName}
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
            title="Service Robots"
            type="Select from our range of Service Robots"
            tagline="Our service robots will do all those pesky chores that you don't have time for!"
        >
            {page}
        </ContentPageLayout>
    )
}

export async function getStaticProps(content){
    const filePath = path.join(process.cwd(), './mock/robots.json');
    const robots = JSON.parse(await fs.readFile(filePath, 'utf8'));

    const serviceRobots = robots.filter(bot => bot.type === "Service Robot")
    return {
        props: {
            serviceBots: serviceRobots
        }
    }
}