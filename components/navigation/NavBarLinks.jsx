import Link from 'next/link'

function NavBarLinks({customStyles, ...props}) {
    return ( 
        <ul className={`${customStyles} lg:gap-4`}>
            <li className="w-full lg:w-[unset] text-center">
                <Link className="w-full py-[0.25rem] lg:w-[unset] lg:py-[unset] hidden lg:inline-block" href="/">home</Link>
            </li>
            <li className="w-full lg:w-[unset] text-center">
                <Link className="w-full py-[0.5rem] lg:w-[unset] lg:py-[unset] hidden lg:inline-block" href="/service-robots">Service Robots</Link>
            </li>
            <li className="w-full lg:w-[unset] text-center">
                <Link className="w-full py-[0.5rem] lg:w-[unset] lg:py-[unset] hidden lg:inline-block" href="/combat-robots">Combat Robots</Link> 
            </li>
            <li className="w-full lg:w-[unset] text-center">
                <Link className="w-full py-[0.5rem] lg:w-[unset] lg:py-[unset] hidden lg:inline-block" href="/social-robots">Social Robots</Link> 
            </li>
            <li className="w-full lg:w-[unset] text-center">
                <Link className="w-full py-[0.5rem] lg:w-[unset] lg:py-[unset] hidden lg:inline-block" href="/cats">Cats</Link> 
            </li>
        </ul>
     );
}

export default NavBarLinks;