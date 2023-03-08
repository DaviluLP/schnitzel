import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

export default function Home() {
  const [start, setStart] = useState(false)

  return (
    <div>
      <div className='container-fluid my-4'>
        <div className='row text-center'>
          <div className='col-1'></div>
          <div className='col'>
            <h1>Projekt-Schnitzeljagd</h1>
            <p>Hallöchen und herzlich Willkommen zu der Schnitzeljagd von den Ninja-Eichhörnchen der J-TK-2!</p>
            <p>Drück es fest und das Spiel kann beginnen!</p>
            <p>
              <Button
                onClick={() => setStart(!start)}
                aria-expanded= {start}
              >Bestätigen</Button>
            </p>
            {start !== true ? (
              <Image src='/bilder/Eichhoernchenbw.png' width={240} height={240} alt='Ninja Eichhoernchen'></Image>
            ) : (
              <Link href={'./fragen/Quest_1'}>
                <Image src='/bilder/Eichhoernchen.png' width={240} height={240} alt='Ninja Eichhoernchen'></Image>
              </Link>

            )}
          </div>
          <div className='col-1'></div>
        </div>
      </div >
    </div >
  )
}
