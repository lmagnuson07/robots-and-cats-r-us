import Link from 'next/link'

import { LogoSvg } from '../icons'

function LoginContent() {
    return (
        <>
            <section className="bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 pt-14 pb-48 min-h-screen mx-auto">
                    <Link className="flex justify-center" href="/">
                        <LogoSvg className="fill-emerald-800 w-24 mb-4" />
                    </Link>
                    <h2 className="text-xl font-bold leading-tight tracking-tight mb-2 md:text-3xl text-white">
                        Sign in to your account
                    </h2>
                    <p className="text-base font-bold leading-tight tracking-tight mb-20 text-indigo-600 md:text-lg">Or start your 30 day trial!</p>
                    <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border rounded focus:ring-3 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="remember" className="text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <Link href="#" className="text-sm font-medium hover:underline text-primary-500">Forgot password?</Link>
                                </div>
                                <button type="submit" className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Sign in</button>
                                <p className="text-sm font-light text-gray-400">
                                    Don't have an account yet? <Link href="#" className="font-medium hover:underline text-primary-500">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginContent;