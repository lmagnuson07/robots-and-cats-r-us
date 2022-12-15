import Image from 'next/image'

function BioNav({avatar, fullName, type, manufacturerName}) {
    return ( 
        <nav className="pointer-events-auto flex flex-col items-center gap-6 justify-center">
            <figure className="flex flex-wrap items-center justify-center gap-6">
                <Image
                    src={avatar}
                    width={140}
                    height={140}
                    className={`${type === "Cats" ? "" : "rounded-full"} w-[140px] h-[140px]`}
                    alt={`The ${fullName}, a ${type} of ${manufacturerName}`}
                    priority
                />
                <figcaption className="font-bold text-2xl sm:text-4xl font-rockwell">
                    {fullName}
                </figcaption>
            </figure>
            <ul className="flex flex-col sm:flex-row rounded-lg max-w-[300px] w-full sm:max-w-fit sm:rounded-full px-3 text-sm font-medium shadow-lg text-gray-100 shadow-gray-600/5 ring-1 ring-zinc-900/5 backdrop-blur bg-gray-600/90">
                <li className="relative block px-3 py-2 transition hover:text-violet-400">
                    About
                </li>
                <li className="relative block px-3 py-2 transition hover:text-violet-400">
                    Manufacturer
                </li>
                <li className="relative block px-3 py-2 transition hover:text-violet-400">
                    History
                </li>
                <li className="relative block px-3 py-2 transition hover:text-violet-400">
                    Manual
                </li>
                <li className="relative block px-3 py-2 transition hover:text-violet-400">
                    License
                </li>
            </ul>
        </nav>
    );
}

export default BioNav;