import LoginButton from './LoginButton';
import GithubButton from './GithubButton';
import NavBarBranding from './NavBarBranding';
import NavBarLinks from './NavBarLinks';
import { useState } from 'react'

function NavBar() {
    const [toggle, setToggle] = useState(false);
    function handleClick(evt){
        setToggle(!toggle);
    }
    return ( 
        <header className="bg-gray-50 shadow-lg text-slate-600 font-bold fixed w-full px-3 py-4 z-20">
            <div className="container grid grid-cols-2 lg:grid-cols-[1fr,auto,1fr] justify-between relative items-center mx-auto">
                <NavBarBranding />
                <nav id="main-nav" className={`col-[1/-1] lg:col-[2/3] fixed left-0 top-[72px] w-full bg-gray-50 lg:static ${toggle ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"} lg:opacity-100 lg:max-h-12`}>
                    <NavBarLinks customStyles="flex flex-col items-center lg:flex-row" />
                </nav>
                <div id="links" className={`flex justify-around col-[1/-1] lg:col-[3/-1] fixed top-[252px] bg-gray-50 right-0 left-0 gap-4 m-auto w-full px-10 md:px-24 lg:justify-end py-4 lg:static lg:px-0 lg:py-0 ${toggle ? "opacity-100 max-h-24" : "opacity-0 max-h-0"} lg:opacity-100 lg:max-h-12`}>
                    <GithubButton className="flex" />
                    <LoginButton className="flex" />
                </div>
                <button
                    title="Toggle Button"
                    type="button"
                    className= {`col-[2/3] row-[1/-1] justify-self-end lg:hidden inline-flex items-center p-2 ml-3 text-sm rounded focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600`} 
                    aria-controls="navbar-default"
                    aria-expanded="false"
                    onClick={(evt) => handleClick(evt)}
                >
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default NavBar;