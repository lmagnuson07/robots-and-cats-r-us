import LoginButton from './LoginButton';
import MobileMenuButton from './MobileMenuButton';
import NavBarBranding from './NavBarBranding';
import NavBarLinks from './NavBarLinks';

function NavBar() {
    return ( 
        <nav className="flex justify-between shadow relative">
            <NavBarBranding />
            <NavBarLinks />
            <LoginButton className="md:flex md:justify-end" />
            <MobileMenuButton className="md:hidden"/> 
        </nav>
     );
}

export default NavBar;