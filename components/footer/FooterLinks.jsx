import Link from 'next/link'

function FooterLinks() {
    return ( 
        <>
            <section className="sm:w-[calc(50%-.25rem)] pt-10">
                <h3 className="text-4xl mb-4 text-gray-700">
                    Product Pages
                </h3>
                <ul className="">
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
            </section>
        </>
        
     );
}

export default FooterLinks;