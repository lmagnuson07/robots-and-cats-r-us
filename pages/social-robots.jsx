import { ContentPageLayout } from './../components/layouts'

function SocialRobotsPage() {
    return ( 
        <>
        </>
    );
}

export default SocialRobotsPage;

SocialRobotsPage.getLayout = function getLayout(page) {
    return (
        <ContentPageLayout 
            title="Social Robots"
            type="Select from our range of Social Robots"
            tagline="Our social robots will keep you company throughout the day, telling stories and holding a conversation!"
        >
            {page}
        </ContentPageLayout>
    )
}