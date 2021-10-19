import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/megafil_logo.png'
import Fb from '../public/fb.svg'
import In from '../public/in.svg'

const Footer = () => {
    return (
        <>
            <footer className="block w-full h-auto relative text-green-600">
                <section className="w-full h-auto py-4 flex justify-between items-center bg-gray-800">
                    <div id="flogo" className="w-1/4  flex justify-center">
                        <Link href="#">
                            <a className="relative h-auto">
                                <Image src={logo} width={100} height={30}/>
                            </a>
                        </Link>
                    </div>
                    <div id="fmenu" className="w-2/4 ">
                        <ul className="flex justify-center items-center text-center text-sm">
                            <li className="m-1 hover:text-green-500">
                                <Link href="/about">
                                    <a className="p-2">About us</a>
                                </Link>
                            </li>
                            <li className="m-1 hover:text-green-500">
                                <Link href="#">
                                    <a className="p-2">Services</a>
                                </Link>
                            </li>
                            <li className="m-1 hover:text-green-500">
                                <Link href="#">
                                    <a className="p-2">Products</a>
                                </Link>
                            </li>
                            <li className="m-1 hover:text-green-500">
                                <Link href="#">
                                    <a className="p-2">Contacts</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div id="fsocial" className="w-1/4 h-auto flex-col justify-center items-center">
                        <ul className="w-full flex justify-center items-center mb-1">
                            <li className="mr-4 relative block transform hover:scale-105">
                                <Link href="#">
                                    <a className="relative">
                                        <Image src={Fb} width={30} height={30}/>
                                    </a>
                                </Link>
                            </li>
                            <li className="relative block transform hover:scale-105">
                                <Link href="#">
                                    <a>
                                        <Image src={In} width={30} height={30}/>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <ul className="w-full flex justify-center items-center text-sm">
                            <li className="m-1 hover:text-green-500">
                                <Link href="#">
                                    <a>TM</a>
                                </Link>
                            </li>
                            <li className="m-1 hover:text-green-500">
                                <Link href="#">
                                    <a>EN</a>
                                </Link>
                            </li>
                            <li className="m-1 hover:text-green-500">
                                <Link href="#">
                                    <a>RU</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="relative block w-full h-auto py-4 bg-gray-900 text-green-700">
                    <span className="flex justify-center text-xs">All rights reserved</span>
                </section>
            </footer>
        </>
    )
}

export default Footer
