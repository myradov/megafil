import React from 'react'
import Image from 'next/image'

import Air from '../public/air.jpg'
import Oil from '../public/oil.jpg'
import Cabin from '../public/cabin.jpg'

const Products = () => {
    return (
        <>
            <section className="relative block w-full h-auto">
                <main className="flex flex-col justify-center items-center bg-gray-300">
                    <article className="w-full h-auto relative flex justify-between items-center">
                        <div className="w-1/2 flex flex-col justify-center items-center">
                            <h1 className="text-3xl font-bold my-2">Air filters</h1>
                            <p className="text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, vitae!</p>
                        </div>
                        <div className="relative w-1/2">
                            <Image src={Air} width={500} height={600} sizes="100%"/>
                        </div>
                    </article>
                    <article className="w-full h-auto relative flex justify-between items-center">
                        <div className="relative w-1/2">
                            <Image src={Oil} width={500} height={600} sizes="100%"/>
                        </div>
                        <div className="w-1/2 flex flex-col justify-center items-center">
                            <h1 className="text-3xl font-bold my-2">Oil filters</h1>
                            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, vitae!</p>
                        </div>
                    </article>
                    <article className="w-full h-auto relative flex justify-between items-center">
                        <div className="w-1/2 flex flex-col justify-center items-center">
                            <h1 className="text-3xl font-bold my-2">Cabin filters</h1>
                            <p className="text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, vitae!</p>
                        </div>
                        <div className="relative w-1/2">
                            <Image src={Cabin} width={500} height={600} sizes="100%"/>
                        </div>
                    </article>
                </main>
            </section>
        </>
    )
}

export default Products
