import Head from 'next/head'  
import { ContentPageHeader } from './../components/headers'

function ServiceRobotsPage() {
    return ( 
        <>
            <Head>
                <title>Service Robots</title>
            </Head>
            <ContentPageHeader
                type="Service Robots"
                title="Select from our range of Service Robots"
                tagline="Our service robots will do all those pesky chores that you don't have time for!"
            />
        </>
    );
}

export default ServiceRobotsPage;