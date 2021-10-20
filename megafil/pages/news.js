import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import postImg from '../public/app.jpeg'

const News = () => {
    return (
        <>
             <section className="relative block w-full h-auto" id="news">
                 <header className="bg-gray-300 w-full h-60 relative flex flex-col justify-center items-center">
                     <h1 className="text-4xl font-bold my-2">Welcome to the News page</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, praesentium?</p>
                 </header>
                <main className="relative w-full h-1/2 flex justify-center items-center">   
                    <ul className="relative w-full h-auto flex items-center justify-start max-w-screen-xl flex-wrap  ">
                    <li className="block w-80 h-auto bg-white mr-1 mb-4">
                            <Link href="#">
                                <a className="flex flex-col justify-center items-start">
                                    <div className="block relative w-full h-auto rounded-md">
                                        <Image src={postImg} width={400} height={320} layout="responsive" className="rounded-md"/>
                                    </div>
                                    <div className="relative flex flex-col justify-center items-start px-2">
                                        <h2 className="text-lg font-bold mb-1">Title of the post</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit.</p>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="block w-80 h-auto bg-white mr-1 mb-4">
                            <Link href="#">
                                <a className="flex flex-col justify-center items-start">
                                    <div className="block relative w-full h-auto rounded-md">
                                        <Image src={postImg} width={400} height={320} layout="responsive" className="rounded-md"/>
                                    </div>
                                    <div className="relative flex flex-col justify-center items-start px-2">
                                        <h2 className="text-lg font-bold mb-1">Title of the post</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit.</p>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="block w-80 h-auto bg-white mr-1 mb-4">
                            <Link href="#">
                                <a className="flex flex-col justify-center items-start">
                                    <div className="block relative w-full h-auto rounded-md">
                                        <Image src={postImg} width={400} height={320} layout="responsive" className="rounded-md"/>
                                    </div>
                                    <div className="relative flex flex-col justify-center items-start px-2">
                                        <h2 className="text-lg font-bold mb-1">Title of the post</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit.</p>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="block w-80 h-auto bg-white mr-1 mb-4">
                            <Link href="#">
                                <a className="flex flex-col justify-center items-start">
                                    <div className="block relative w-full h-auto rounded-md">
                                        <Image src={postImg} width={400} height={320} layout="responsive" className="rounded-md"/>
                                    </div>
                                    <div className="relative flex flex-col justify-center items-start px-2">
                                        <h2 className="text-lg font-bold mb-1">Title of the post</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit.</p>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="block w-80 h-auto bg-white mr-1 mb-4">
                            <Link href="#">
                                <a className="flex flex-col justify-center items-start">
                                    <div className="block relative w-full h-auto rounded-md">
                                        <Image src={postImg} width={400} height={320} layout="responsive" className="rounded-md"/>
                                    </div>
                                    <div className="relative flex flex-col justify-center items-start px-2">
                                        <h2 className="text-lg font-bold mb-1">Title of the post</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit.</p>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </main>
            </section>
        </>
    )
}

export default News