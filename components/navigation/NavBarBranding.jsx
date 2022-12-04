import { LogoSvg } from './../icons'
import Link from 'next/link'

function NavBarBranding({className, ...props}) {
    return ( 
        <Link href="/">
            <figure className="flex items-center gap-2 w-[196px]">
                <LogoSvg className="fill-emerald-800 w-6 h-6" />
                <figcaption>
                    <h1>Robots & Cats 'R Us</h1>
                </figcaption>
            </figure>
        </Link>
    );
}

export default NavBarBranding;