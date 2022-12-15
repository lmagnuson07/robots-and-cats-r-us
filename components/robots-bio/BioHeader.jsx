
function BioHeader({heading, manufacturerName, children, randomDate, ...props}) {
    return (
        <>
            <header className="w-full mx-auto space-y-4 text-center">
                {children}
                <h2 className="text-4xl md:leading-tight font-bold px-6 pt-8 md:text-5xl">{heading}</h2>
                <p className="text-sm text-gray-400">by
                    <a href="#" target="_blank" className="underline text-violet-400 inline-block mx-1">
                        <span>{manufacturerName}</span>
                    </a>on
                    <span className="inline-block ml-1">{randomDate}</span>
                </p>
            </header>
            
        </>
    );
}

export default BioHeader;