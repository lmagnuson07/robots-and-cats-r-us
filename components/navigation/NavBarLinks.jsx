import Link from 'next/link'

function NavBarLinks({customStyles, ...props}) {
    return ( 
        <ul className={`${customStyles} lg:gap-4`}>
            <li className="w-full lg:w-[unset] text-center">
                <Link className="w-full inline-block py-[0.25rem] lg:w-[unset] lg:py-[unset]" href="/">home</Link>
            </li>
            <li className="w-full lg:w-[unset] text-center">
                <Link className="w-full inline-block py-[0.5rem] lg:w-[unset] lg:py-[unset]" href="/service-robots">Service Robots</Link>
            </li>
            <li className="w-full lg:w-[unset] text-center">
                <Link className="w-full inline-block py-[0.5rem] lg:w-[unset] lg:py-[unset]" href="/combat-robots">Combat Robots</Link> 
            </li>
            <li className="w-full lg:w-[unset] text-center">
                <Link className="w-full inline-block py-[0.5rem] lg:w-[unset] lg:py-[unset]" href="/social-robots">Social Robots</Link> 
            </li>
            <li className="w-full lg:w-[unset] text-center">
                <Link className="w-full inline-block py-[0.5rem] lg:w-[unset] lg:py-[unset]" href="/cats">Cats</Link> 
            </li>
        </ul>
     );
}

export default NavBarLinks;