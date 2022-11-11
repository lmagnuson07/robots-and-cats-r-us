import LoginButton from './LoginButton';
import MobileMenuButton from './MobileMenuButton';
import NavBarBranding from './NavBarBranding';
import NavBarLinks from './NavBarLinks';

function NavBar() {
    return ( 
        <header className="bg-gray-50 shadow-lg text-slate-600 font-bold relative md:px-3 pl-3 py-4">
            <div className="container flex justify-between items-center mx-auto">
                <NavBarBranding />
                <nav>
                    <MobileMenuButton className="lg:hidden"/> 
                    <NavBarLinks />
                </nav>
                <LoginButton className="lg:flex lg:justify-end" />
            </div>
        </header>
     );
}

export default NavBar;