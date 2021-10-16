import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Img from '../public/main.jpg'
import Img2 from '../public/main2.jpg'
import Air from '../public/air.jpg'
import Cabin from '../public/cabin.jpg'
import Oil from '../public/oil.jpg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative block bg-gray-200" id="home">
        <section className="bg-gray-500 relative h-screen flex justify-start items-center" id="intro">
          <div className="relative z-10 p-12 w-2/3 h-full flex justify-center items-center bg-gray-400">
            <div className="relative w-2/3 h-full flex flex-col justify-center items-start  text-left">
              <h2 className="text-4xl font-bold my-2">Megafil Filters</h2>
              <p className="text-lg my-1 w-full">
                Never let the fear of failing discourage you from trying!
              </p>
            </div>
          </div>
          <div className="absolute block  w-4/12 z-10 right-36 top-0 h-full">
            <Image src={Img}  layout="fill" className="absolute"/>
          </div>
        </section>

        <section className="relative bg-gray-400 h-screen flex justify-start items-center overflow-hidden" id="about">
          <div className="relative block w-4/12 z-10 left-36 top-0 h-full">
            <Image src={Img2}  layout="fill" className="absolute"/>
          </div>
          <div className="absolute right-0 bottom-50 z-5 p-12 w-2/3 h-full flex justify-center items-center bg-gray-500">
            <div className="relative w-2/3 h-full flex flex-col justify-center items-start bg-gray-500 text-left">
              <h2 className="text-4xl font-bold my-2">About us</h2>
              <p className="text-lg my-1 w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda!Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda!Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda!Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <Link href='/about'>
                <a className="w-32 text-center mt-2 h-auto py-2 px-3 whitespace-nowrap border bottom-0 rounded-md">Read more</a>
              </Link>
            </div>
          </div>
        </section>

        <section className="relative block bg-gray-200 w-full h-auto py-3 my-4" id="products">
          <header className="relative block w-full h-auto py-4">
            <h1 className="text-center font-black text-4xl">Explore Our Products</h1>
          </header>
          <div className="w-full h-96 flex justify-evenly items-center max-w-screen-xl mx-auto bg-gray-200">
            <article className="w-1/3 h-full m-1 relative flex justify-center items-center bg-gray-200">
              <Image src={Air} layout="fill" objectFit="cover" className="h-full"/> 
              <div className="w-full h-full relative text-black flex flex-col justify-start items-center pt-10 bg-gray-700 bg-opacity-25 hover:bg-white hover:bg-opacity-10">
                <h4 className="block text-base uppercase font-bold py-1">products</h4>
                <h1 className="block text-4xl py-1 font-black">Air filters</h1> 
                <p className="block text-md py-1">Reliable, long-lasting, durable</p>
                <Link href="#">
                  <a className="block text-md py-2 px-3 mt-5 bg-white rounded-md shadow-md uppercase hover:text-green-500">Learn more</a>
                </Link>
              </div>
            </article>
            <article className="w-1/3 h-full m-1 relative flex justify-center items-center bg-gray-200">
              <Image src={Oil} layout="fill" objectFit="cover" className="h-full"/> 
              <div className="w-full h-full relative text-black flex flex-col justify-start items-center pt-10 bg-gray-700 bg-opacity-25 hover:bg-white hover:bg-opacity-10">
                <h4 className="block text-base uppercase font-bold py-1">products</h4>
                <h1 className="block text-4xl py-1 font-black">Oil filters</h1> 
                <p className="block text-md py-1">Reliable, long-lasting, durable</p>
                <Link href="#">
                  <a className="block text-md py-2 px-3 mt-5 bg-white rounded-md shadow-md uppercase hover:text-green-500">Learn more</a>
                </Link>
              </div>
            </article>
            <article className="w-1/3 h-full m-1 relative flex justify-center items-center bg-gray-200">
              <Image src={Cabin} layout="fill" objectFit="cover" className="h-full"/> 
              <div className="w-full h-full relative text-black flex flex-col justify-start items-center pt-10 bg-gray-700 bg-opacity-25 hover:bg-white hover:bg-opacity-10">
                <h4 className="block text-base uppercase font-bold py-1">products</h4>
                <h1 className="block text-4xl py-1 font-black">Cabin filters</h1> 
                <p className="block text-md py-1">Reliable, long-lasting, durable</p>
                <Link href="#">
                  <a className="block text-md py-2 px-3 mt-5 bg-white rounded-md shadow-md uppercase hover:text-green-500">Learn more</a>
                </Link>
              </div>
            </article>
          </div>
        </section>

      </section>
    </div>

  )
}
