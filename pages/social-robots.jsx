import Head from 'next/head'  
import { ContentPageHeader } from './../components/headers'

function SocialRobotsPage() {
    return ( 
        <>
            <Head>
                <title>Social Robots</title>
            </Head>
            <main>
                <ContentPageHeader
                    type="Social Robots"
                    title="Select from our range of Social Robots"
                    tagline="Our social robots will keep you company throughout the day, telling stories and holding a conversation!"
                />
            </main>
        </>
    );
}

export default SocialRobotsPage;