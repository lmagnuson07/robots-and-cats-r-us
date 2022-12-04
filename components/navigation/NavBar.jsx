import LoginButton from './LoginButton';
import GithubButton from './GithubButton';
import MobileMenuButton from './MobileMenuButton';
import NavBarBranding from './NavBarBranding';
import NavBarLinks from './NavBarLinks';


function NavBar() {
    return ( 
        <header className="bg-gray-50 shadow-lg text-slate-600 font-bold fixed w-full px-3 py-4 z-20">
            <div className="container grid grid-cols-2 lg:grid-cols-[1fr,auto,1fr] justify-between relative items-center mx-auto">
                <NavBarBranding />
                <nav id="main-nav" className="col-[1/-1] lg:col-[2/3] fixed left-0 top-[72px] w-full bg-gray-50 lg:static opacity-0 max-h-0 lg:opacity-100 lg:max-h-12">
                    <NavBarLinks customStyles="flex flex-col items-center lg:flex-row" />
                </nav>
                <div id="links" className="flex justify-around col-[1/-1] lg:col-[3/-1] fixed top-[252px] bg-gray-50 right-0 left-0 gap-4 m-auto w-full px-10 md:px-24 lg:justify-end py-4 lg:static lg:px-0 lg:py-0 opacity-0 lg:opacity-100 lg:max-h-12">
                    <GithubButton className="flex" />
                    <LoginButton className="flex" />
                </div>
                <MobileMenuButton id="nav-button" className="col-[2/3] row-[1/-1] justify-self-end lg:hidden"/> 
            </div>
        </header>
    );
}

export default NavBar;