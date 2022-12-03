function HomePageProductSection({children, ...props}) {
    return (
        <>
            <section className="container pt-4 px-4 mx-auto lg:w-[calc(50%-1rem)]">
                {children}
            </section>
        </>
    )
}

export default HomePageProductSection;