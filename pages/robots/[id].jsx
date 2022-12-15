import { BioHeader, BioNav, BioTopic } from "../../components/robots-bio";
import {RobotBioLayout} from "../../components/layouts";
import { getRobots } from "../../libs/getRobots";
import { generateRandomTitle } from "../../libs/generateRandomTitle";
import { randomDate } from "../../libs/generateRandomDate";

function RobotBioPage({avatar, fullName, heading, manufacturerName, virtualAvatar, randomDate, description, manufacturerEmail, manufacturerPhone, manufacturerWebsite, type, price, manufacturerPrice, available, ...props}) {
    return (
        <>
            <BioHeader heading={heading} manufacturerName={manufacturerName} randomDate={randomDate}>
                <BioNav avatar={avatar} fullName={fullName} type={type} manufacturerName={manufacturerName}/>
            </BioHeader>
            <BioTopic 
            avatar={avatar} virtualAvatar={virtualAvatar} fullName={fullName} description={description}
            manufacturerName={manufacturerName} manufacturerEmail={manufacturerEmail}
            manufacturerPhone={manufacturerPhone} manufacturerWebsite={manufacturerWebsite}
            type={type} price={price}
            manufacturerPrice={manufacturerPrice} available={available}
            />
        </>
    );
}

export default RobotBioPage;

export async function getStaticPaths() {
    const robots = await getRobots();
    const paths = robots.map(bot => ({params:{id: bot.id}}));
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const robots = await getRobots();
    const bots = robots.find(bot => bot.id === params.id);
    const bio = {...bots, heading: generateRandomTitle(), randomDate: randomDate()}

    return {
        props: bio
    }
}

RobotBioPage.getLayout = function getLayout(page) {
    return (
        <RobotBioLayout>
            {page}
        </RobotBioLayout>
    )
}