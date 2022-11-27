import { ContentPageLayout } from './../components/layouts'

function ServiceRobotsPage() {
    return ( 
        <>
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