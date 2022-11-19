import Head from 'next/head'  
import { ContentPageHeader } from './../components/headers'

function CombatRobotsPage() {
    return ( 
        <>
            <Head>
                <title>Combat Robots</title>
            </Head>
            <main>
                <ContentPageHeader
                    type="Combat Robots"
                    title="Select from our range of Combat Robots"
                    tagline="Our combat robots will protect you and your loved ones from danger!"
                />
            </main>
        </>
    );
}

export default CombatRobotsPage;