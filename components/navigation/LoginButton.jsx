import Link from 'next/link'

function LoginButton({className, ...props}) {
    return ( 
        <Link href="signin" className={`hidden ${className} w-[196px]`}>
            login
        </Link>
    );
}

export default LoginButton;