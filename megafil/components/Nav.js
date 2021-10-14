import React from 'react'
import Link from 'next/link'

import logo from '../public/vercel.svg'

const Nav = () => {
    return (
        <>
            <nav>
                <div id="menu">
                    <div id="logo">
                        <Link href="/">
                            <a>
                                <Image src={logo}/>
                            </a>
                        </Link>
                    </div>
                    <ul>
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
                </div>
                <div id="sidebar">
                    
                </div>
                
            </nav>   
        </>
    )   
}

export default Nav
