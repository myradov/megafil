import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/vercel.svg'

const Footer = () => {
    return (
        <>
            <footer className="block w-full h-auto relative text-white">
                <section className="w-full h-auto py-4 flex justify-between items-center bg-gray-800">
                    <div id="flogo" className="w-1/4  flex justify-center">
                        <Link href="#">
                            <a>
                                <Image src={logo} width={100} height={100}/>
                            </a>
                        </Link>
                    </div>
                    <div id="fmenu" className="w-2/4 ">
                        <ul className="flex justify-center items-center text-center text-sm text-black ">
                            <li className="m-1 hover:text-gray-600">
                                <Link href="#">
                                    <a>About us</a>
                                </Link>
                            </li>
                            <li className="m-1 hover:text-gray-600">
                                <Link href="#">
                                    <a>Services</a>
                                </Link>
                            </li>
                            <li className="m-1 hover:text-gray-600">
                                <Link href="#">
                                    <a>Products</a>
                                </Link>
                            </li>
                            <li className="m-1 hover:text-gray-600">
                                <Link href="#">
                                    <a>Contacts</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div id="fsocial" className="w-1/4  flex-col justify-center items-center">
                        <ul className="flex justify-center items-center">
                            <li className="m-1">
                                <Link href="#">
                                    <a>
                                        <Image src={logo} width={40} height={40}/>
                                    </a>
                                </Link>
                            </li>
                            <li className="m-1">
                                <Link href="#">
                                    <a>
                                        <Image src={logo} width={40} height={40}/>
                                    </a>
                                </Link>
                            </li>
                            <li className="m-1">
                                <Link href="#">
                                    <a>
                                        <Image src={logo} width={40} height={40}/>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex justify-center items-center text-sm">
                            <li className="m-1">
                                <Link href="#">
                                    <a>TM</a>
                                </Link>
                            </li>
                            <li className="m-1">
                                <Link href="#">
                                    <a>EN</a>
                                </Link>
                            </li>
                            <li className="m-1">
                                <Link href="#">
                                    <a>RU</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="relative block w-full h-auto py-4 bg-gray-900">
                    <span className="flex justify-center text-xs">All rights reserved</span>
                </section>
            </footer>
        </>
    )
}

export default Footer
