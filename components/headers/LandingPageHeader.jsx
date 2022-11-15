import Image from 'next/image'

function LandingPageHeader({tagline, imgSrc, imgAlt, imgWidth, imgHeight, ...props}) {
    return ( 
        <header className="bg-custom-slate-arc py-12 md:pt-32">
            <div className="container grid justify-items-center mx-auto">
                <div className="flex flex-wrap justify-around items-end gap-4 md:gap-8">
                    <Image className="order-1 md:order-[unset] w-28 md:w-40"
                        src="/img/cat.png"
                        alt="Cat sample image"
                        width="160"
                        height="160"
                    />
                    <h2 className="w-full md:w-80 px-3">
                        <Image className="w-72 md:w-80 mx-auto"
                            width={imgWidth}
                            height={imgHeight}
                            src={imgSrc} 
                            alt={imgAlt} 
                        />
                    </h2>
                    <Image className="order-1 w-28 md:w-40"
                        src="/img/service-robot.png"
                        alt="Service robot sample image"
                        width="160"
                        height="160"
                    />
                </div>
                <div className="">
                    <p className="w-[fit-content] my-20 md:my-36 max-w-4xl mx-3 sm:text-2xl text-lg text-center text-zinc-200 text-shadow">
                        {tagline}
                    </p>
                </div>
            </div>
        </header>
    );
}

export default LandingPageHeader;