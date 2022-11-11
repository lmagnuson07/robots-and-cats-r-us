import Link from 'next/link'

function NavBarLinks() {
    return ( 
        <ul className="hidden lg:flex gap-4">
            <li>
                <Link href="/">home</Link>
            </li>
            <li>
                <Link href="/frontend">front end</Link>
            </li>
            <li>
                <Link href="/uiux">ui/ux</Link> 
            </li>
            <li>
                <Link href="/fullstack">full stack</Link> 
            </li>
            <li>
                <Link href="/backend">back end</Link> 
            </li>
        </ul>
     );
}

export default NavBarLinks;