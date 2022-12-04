import LoginButton from './LoginButton';
import GithubButton from './GithubButton';
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
                <div className="flex gap-4">
                    <GithubButton className="lg:flex lg:justify-end" />
                    <LoginButton className="lg:flex lg:justify-end" />
                </div>
            </div>
        </header>
     );
}

export default NavBar;