
function LandingPageHeader({tagline, title, imgSrc, imgAlt, imgWidth, imgHeight, ...props}) {
    return ( 
        <header className="h-screen bg-custom-slate-arc">
            <div className="h-screen container grid grid-rows-[200px_minmax(400px,_1fr)_200px] justify-items-center mx-auto">
                <img className="w-80 px-3 self-end"
                    width={imgWidth}
                    height={imgHeight}
                    src={imgSrc} 
                    alt={imgAlt} 
                />
                <div className="self-center mx-3">
                    <h2 className="w-[fit-content] mb-12 mx-auto sm:text-7xl text-5xl text-center font-serif font-bold text-stone-100 text-shadow-md sm:text-shadow-lg">
                        {title}
                    </h2>
                    <p className="w-[fit-content] max-w-4xl sm:text-xl text-base text-center text-zinc-200 text-shadow">
                        {tagline}
                    </p>
                </div>
            </div>
        </header>
    );
}

export default LandingPageHeader;