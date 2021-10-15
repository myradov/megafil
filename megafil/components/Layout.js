import React from 'react'
import Head from 'next/head'

//components
import Nav from '../components/Nav.js'
import Footer from '../components/Footer.js'

const siteTitle = 'Megafil'

const MainLayout = ({children}) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Megafil"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                    siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />

                <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Gentium+Book+Basic:wght@400;700&display=swap" rel="stylesheet"/>
                <title>{siteTitle}</title>  
            </Head>
            <Nav />
            <main className="relative font-main">{children}</main>
            <Footer />
        </>
    )
}

export default MainLayout
