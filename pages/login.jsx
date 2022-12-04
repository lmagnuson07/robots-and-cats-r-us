import Head from 'next/head'  

import { LoginContent } from '../components/content'

export default function LoginPage(){
    return(
        <>
            <Head>
                <title>Login</title>
            </Head>
            <main className="relative top-[72px] lg:top-[76px]">
                <LoginContent />
            </main>
        </>
    )
}
