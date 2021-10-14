import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import logo from '../public/vercel.svg'
import close from '../public/close.svg'
import hamburger from '../public/hamburger.svg'



const Nav = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <nav className="relative w-full h-16 bg-green-400 text-black">
                <div id="menu" className="flex justify-evenly items-center bg-blue-500 md:bg-red-500 lg:bg-pink-500">
                    <div id="logo">
                        <Link href="/">
                            <a>
                                <Image src={logo} alt="Megafil Logo" width={40} height={40}/>
                            </a>
                        </Link>
                    </div>
                    <ul id="menulist" className="hidden md:flex">
                        <li>
                            <Link href="/about">
                                <a>About us</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                                <a>Services</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts">
                                <a>Contacts</a>
                            </Link>
                        </li>
                    </ul>
                    <div id="locales" className="hidden md:block">
                        <ul>
                            <li>
                                <Link href="#">
                                    <a>en</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>ru</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>tm</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div id="hamburger" onClick={showSidebar} className="relative md:hidden">
                        <Link href="#">
                            <a>
                                {sidebar ? <Image src={close} alt="close button"/> : <Image src={hamburger} alt="hamburger menu"/>}
                            </a>
                        </Link>
                    </div>
                </div>
                <div id="sidenav" className={ sidebar ? "fixed w-full h-auto pt-16 bg-red-100" : "hidden"}>
                    <ul id="menulist" className="flex md:hidden">
                        <li>
                            <Link href="/about">
                                <a>About us</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                                <a>Services</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts">
                                <a>Contacts</a>
                            </Link>
                        </li>
                    </ul>
                    <div id="locales" className="hidden md:block">
                        <ul>
                            <li>
                                <Link href="#">
                                    <a>en</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>ru</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>tm</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>   
        </>
    )   
}

export default Nav
