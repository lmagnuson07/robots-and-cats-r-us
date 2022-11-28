import Head from 'next/head'

import { NavBar } from './../navigation'
import { Footer } from './../footer'

function DefaultLayout({children, pageTitle = 'This is the default title', ...props}) {
    return ( 
        <>
            <NavBar />
            {children}
            <Footer />
        </>
     );
}

export default DefaultLayout;