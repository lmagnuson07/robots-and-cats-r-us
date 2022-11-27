import Head from 'next/head'

import { NavBar } from './../navigation'

function DefaultLayout({children, pageTitle = 'This is the default title', ...props}) {
    return ( 
        <>
            <NavBar />
            <main>
                {children}
            </main>
        </>
     );
}

export default DefaultLayout;