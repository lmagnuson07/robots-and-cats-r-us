
function HeaderComponent({tagline, title, imgSrc, imgAlt, ...props}) {
    return ( 
        <header className="h-screen grid grid-rows-[120px_minmax(400px,_1fr)_120px] bg-gradient-to-br from-slate-500 via-gray-900 to-slate-900">
            <img className="w-80 justify-self-center"
                src={imgSrc} 
                alt={imgAlt} 
            />
            <div className="self-center justify-self-center">
                <h1 className="w-[fit-content] text-7xl font-serif text-stone-100 text-shadow mb-12 mx-auto border-black">
                    {title}
                </h1>
                <p className="w-[fit-content] max-w-4xl text-xl text-center text-zinc-200">
                    {tagline}
                </p>
            </div>
        </header>
    );
}

export default HeaderComponent;