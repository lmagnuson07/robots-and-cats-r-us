function HomePageParagraph({content, customStyle = "", maxWidth="max-w-6xl lg:max-w-[72rem]", smallText = false, ...props}) {
    const variants = {
        normalText: "text-lg lg:text-2x",
        smallText: "text-lg lg:text-xl "
    }
    return (
        <>
            <p className={`${smallText ? variants.smallText : variants.normalText} ${customStyle} ${maxWidth} w-fit mx-auto lg:text-2xl mb-6 lg:mb-10 font-normal text-gray-700 dark:text-gray-400`}>
                {content}
            </p>
        </>
    )
}

export default HomePageParagraph;