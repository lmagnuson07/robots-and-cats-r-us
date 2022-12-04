import Link from 'next/link'
import { IoMdLogIn } from 'react-icons/io'
import { IconContext } from "react-icons";

function LoginButton({...props}) {
    return ( 
        <Link href="login">
            <figure className="flex flex-col items-center">
                <IconContext.Provider value={{className: "fill-indigo-600", size: "1.5rem"}}>
                    <IoMdLogIn />
                </IconContext.Provider>
                <figcaption className="text-sm text-indigo-600 font-normal">
                    login
                </figcaption>
            </figure> 
        </Link>
    );
}

export default LoginButton;