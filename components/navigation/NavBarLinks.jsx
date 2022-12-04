import Link from 'next/link'

function NavBarLinks({customStyles, ...props}) {
    return ( 
        <ul className={`${customStyles} gap-4`}>
            <li>
                <Link href="/">home</Link>
            </li>
            <li>
                <Link href="/service-robots">Service Robots</Link>
            </li>
            <li>
                <Link href="/combat-robots">Combat Robots</Link> 
            </li>
            <li>
                <Link href="/social-robots">Social Robots</Link> 
            </li>
            <li>
                <Link href="/cats">Cats</Link> 
            </li>
        </ul>
     );
}

export default NavBarLinks;