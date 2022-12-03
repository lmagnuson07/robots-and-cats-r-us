function HomePageInnerSection({children, ...props}) {
    return (
        <>
            <div className="py-6 lg:py-12 bg-gray-900">
                <section className="container pt-4 pb-10 px-4 mx-auto text-center">
                    {children}
                </section>
            </div>
        </>
    )
}

export default HomePageInnerSection;