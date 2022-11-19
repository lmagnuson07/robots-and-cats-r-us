import Head from 'next/head'  
import { ContentPageHeader } from '../components/headers'

function CatsPage() {
    return ( 
        <>
            <Head>
                <title>Cats</title>
            </Head>
            <ContentPageHeader
                type="Virtual Cats"
                title="Select from our range of Virtual Cats"
                tagline="Our virtual cats will be your trustworthy companions in the Metaverse!"
            />
        </>
    );
}

export default CatsPage;