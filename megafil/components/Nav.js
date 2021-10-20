import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import logo from '../public/megafil_logo.png'
import close from '../public/close.svg'
import hamburger from '../public/hamburger.svg'



const Nav = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    const [menuBg, setMenuBg] = useState('bg-transparent')

    const handleScroll = (e) => {
        window.pageYOffset > 600 ? setMenuBg('bg-white shadow-md'): setMenuBg('bg-transparent')
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => removeEventListener('scroll', handleScroll)
    },[])

    return (
        <>
            <nav className="fixed z-20 w-full h-16  text-black font-main">
                <div id="menu" className={`relative w-full h-full px-8 flex justify-between items-center ${menuBg} md:${menuBg} lg:${menuBg}`}>
                    <div id="logo" className="relative block w-14 h-10 md:w-28 md:h-10">
                        <Link href="/">
                            <a className="block w-full h-full"> 
                                <Image src={logo} alt="Megafil Logo" layout="fill" sizes="100%"/>
                            </a>
                        </Link>
                    </div>
                    <ul id="menulist" className="hidden md:flex justify-between items-center w-1/3 h-full">
                        <li className="block">
                            <Link href="/about">
                                <a className="block py-3 px-4 hover:text-green-400 whitespace-nowrap">About us</a>
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href="/services">
                                <a className="block py-3 px-4 hover:text-green-400">Services</a>
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href="/products">
                                <a className="block py-3 px-4 hover:text-green-400">Products</a>
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href="/news">
                                <a className="block py-3 px-4 hover:text-green-400">News</a>
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href="/contacts">
                                <a className="block py-3 px-4 hover:text-green-400">Contacts</a>
                            </Link>
                        </li>
                    </ul>
                    <div id="locales" className="hidden md:block uppercase text-xs z-20">
                        <ul className="flex justify-between items-center divide-x-2 > * divide-solid divide-black ">
                            <li className="">
                                <Link href="#">
                                    <a className="block py-1 px-2 hover:text-white">en</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="block py-1 px-2 hover:text-white">ru</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="block py-1 px-2 hover:text-white">tm</a>
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
                <div id="sidenav" className={ sidebar ? "fixed w-full h-auto z-10 bg-red-100" : "hidden"}>
                    <ul id="menulist" className="flex flex-col justify-center items-center md:hidden">
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
                            <Link href="/news">
                                <a>News</a>
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
