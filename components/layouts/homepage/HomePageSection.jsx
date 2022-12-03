function HomePageSection({children, ...props}) {
    return (
        <>
            <section className="mx-auto selection:text-6xl font-bold">
                {children}
            </section>
        </>
    )
}

export default HomePageSection;