import Head from 'next/head'
import Navbar from './Navbar'
import Fusszeile from './Fusszeile'

export default function Home({ children }) {
    return (
        <div className='bg-info min-vh-100'>
            <Head>
                <title>Schnitzeljagd</title>
                <meta name="description" content="Ein kleines Projekt zu unserer Schnitzeljagd" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            {children}
            <Fusszeile/>
        </div>
    )

}
