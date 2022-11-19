import Image from 'next/image'

function LandingPageHeader({tagline, imgSrc, imgAlt, imgWidth, imgHeight, ...props}) {
    return ( 
        <header className="bg-custom-slate-arc py-12 px-3">
            <div className="container grid justify-items-center mx-auto">
                <div className="flex flex-wrap justify-around items-end gap-6 md:gap-8 mb-24 md:mb-32">
                    <Image className="order-1 md:order-[unset] w-28 md:w-40"
                        src="/img/cat.png"
                        alt="Cat sample image"
                        width={160}
                        height={160}
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
                        width={160}
                        height={160}
                    />
                </div>
                <figure className="flex flex-wrap items-center justify-center gap-16 md:gap-8 justify-self-start mx-4 lg:mx-28 max-w-6xl md:justify-self-center">
                    <figcaption className="md:w-[calc(50%-1rem)]">
                        <p className="text-4xl xl:text-5xl font-bold text-zinc-200 text-center md:text-left mb-10 font-serif text-shadow">Do you have a problem, hassle, or inconvenience?</p>
                        <p className="text-2xl xl:text-3xl text-zinc-200 text-center md:text-left text-shadow">We have a Robot for that!!</p>
                    </figcaption>
                    <Image className="md:w-[calc(50%-1rem)]"
                        src="/img/agreement-image.png"
                        alt="Two people shaking hands in agreement"
                        width={680}
                        height={420}
                    />
                </figure>
                <p className="w-[fit-content] my-10 md:my-24 max-w-3xl mx-3 sm:text-2xl text-lg text-center text-zinc-200 text-shadow">
                    {tagline}
                </p>
            </div>
        </header>
    );
}

export default LandingPageHeader;