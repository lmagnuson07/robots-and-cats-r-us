import Link from 'next/link'
import { AiOutlineGithub } from 'react-icons/ai'
import { IconContext } from "react-icons";

function GithubButton({ ...props}) {
    return ( 
        <Link href="https://github.com/lmagnuson07/robots-and-cats-r-us/tree/main" target="_blank" >
            <figure className="flex flex-col items-center">
                <IconContext.Provider value={{className: "fill-emerald-700", size: "1.5rem"}}>
                    <AiOutlineGithub />
                </IconContext.Provider>
                <figcaption className="text-sm text-emerald-700 font-normal">
                    github
                </figcaption>
            </figure> 
        </Link>
    );
}

export default GithubButton;