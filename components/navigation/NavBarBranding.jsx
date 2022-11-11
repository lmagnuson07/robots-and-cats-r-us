import { LogoSvg } from './../icons'

function NavBarBranding({className, ...props}) {
    return (  
        <figure className="flex items-center gap-2">
            <LogoSvg className="fill-emerald-800 w-6" />
            <figcaption>
                <h1>Robots and Cats 'R Us</h1>
            </figcaption>
        </figure>
    );
}

export default NavBarBranding;