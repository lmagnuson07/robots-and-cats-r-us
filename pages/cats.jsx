import { ContentPageLayout } from '../components/layouts'

function CatsPage() {
    return ( 
        <>
        </>
    );
}

export default CatsPage;

CatsPage.getLayout = function getLayout(page) {
    return (
        <ContentPageLayout 
            title="Virtual Cats"
            type="Select from our range of Virtual Cats"
            tagline="Our virtual cats will be your trustworthy companions in the Metaverse!"
        >
            {page}
        </ContentPageLayout>
    )
}