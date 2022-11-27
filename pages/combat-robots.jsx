import { ContentPageLayout } from './../components/layouts'

function CombatRobotsPage() {
    return ( 
        <>
        </>
    );
}

export default CombatRobotsPage;

CombatRobotsPage.getLayout = function getLayout(page) {
    return (
        <ContentPageLayout 
            title="Combat Robots"
            type="Select from our range of Combat Robots"
            tagline="Our combat robots will protect you and your loved ones from danger!"
        >
            {page}
        </ContentPageLayout>
    )
}