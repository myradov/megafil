import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Img from '../public/app.jpeg'

const Contacts = () => {
    return (
        <>
        <Head>
            <title>Contacts</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <section className="relative block w-full h-screen">
                <main className="w-full h-screen relative bg-gray-500 mx-auto">
                    <article className="w-full h-full flex justify-center items-center">
                        <div className="w-2/3 h-full relative">
                            <Image src={Img} sizes="100%" layout="fill"/>
                        </div>
                        <div className="w-1/3 h-auto bg-red-50 flex flex-col justify-center items-center">
                            <h1 className="font-bold text-2xl py-4">Our contacts</h1>
                            <div>
                                <h2>Ashgabat city, Parahat 2, Imperial Business Center, 7 floor, Room 1</h2>
                                <h3>Phone Number: +9931223-34-45</h3>
                                <h3>Email: info@megafil.com</h3>
                            </div>
                        </div>
                    </article>
                </main>
            </section>
        </>
    )
}

export default Contacts
