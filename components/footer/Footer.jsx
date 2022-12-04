import Link from 'next/link'
import FooterLinks from './FooterLinks';

import { LogoSvg } from './../icons'

function Footer({ ...props}) {
    return (
      <>
        <footer className="text-center px-3 py-10 bg-gray-50 text-slate-600 font-bold relative top-[72px] lg:top-[76px]">
            <section className="container mx-auto">
                <header className="border-b-2 pb-8 border-gray-700">
                    <Link className="flex justify-center" href="/">
                        <figure className="flex items-center gap-2 w-fit">
                            <LogoSvg className="fill-emerald-800 w-12" />
                            <figcaption>
                                <h2 className="text-xl">Robots & Cats 'R Us</h2>
                            </figcaption>
                        </figure>
                    </Link>
                </header>
                <div className="flex flex-wrap gap-2 justify-center">
                    <adress className="flex pt-10 flex-col sm:w-[calc(50%-.25rem)]">
                        <h3 className="text-4xl mb-4 text-gray-700">
                            Contact Info
                        </h3>
                        <ul className="">
                            <li>
                                29008 Katie Hill
                            </li>
                            <li className="mb-4">
                                Alberta, Grande Prairie
                            </li>
                            <li>
                                399-975-3644
                            </li>
                            <li>
                                cats-and-robots-r-us@yahoo.com
                            </li>
                        </ul>
                        </adress>
                    <FooterLinks />
                </div>
                <p className="mt-12">© 2022 Robots & Cats R Us</p>
            </section>
        </footer>
      </>
    );
  }
  
  export default Footer;