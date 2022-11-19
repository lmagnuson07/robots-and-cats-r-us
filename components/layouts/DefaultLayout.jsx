import { NavBar } from './../navigation'

function DefaultLayout({children, ...props}) {
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