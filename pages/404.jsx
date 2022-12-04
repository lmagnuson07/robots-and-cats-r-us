import Head from 'next/head'  
import Image from 'next/image'

export default function PageNotFound(){
    return(
        <>
            <Head>
                <title>Page not found</title>
            </Head>
            <main className="relative top-[72px] lg:top-[76px]">
                <div className="bg-indigo-900 relative overflow-hidden h-screen">
                    <Image 
                        src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9" 
                        className="absolute h-full w-full object-cover"
                        width={960}
                        height={540}
                    />
                    <div className="inset-0 bg-black opacity-25 absolute"></div>
                    <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                        <div className="w-full font-mono flex flex-col items-center relative z-10">
                            <h2 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">You are all alone here</h2>
                            <p className="font-extrabold text-8xl my-44 text-white animate-bounce">404</p>
                        </div>
                    </div>
                </div>
            </main>
            
        </>
    )
}