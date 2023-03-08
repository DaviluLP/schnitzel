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
            <p>Ihr müsst auf jeder Seite den Bestätigen Button drücken um das Bild zur nächsten Aufgabe zu unlocken.</p>
            <p>Dies ist nur eine Vorsichtsmaßnahme, dass nicht ausversehen Seiten übersprungen werden.</p>
            <p>Zurück geht es nur über den zurück Knopf des jeweiligem Handys, bin leider nicht zu gekommen noch schnell Cookies einzubauen.</p>
            <p>Na dann. Wenn ihr bereit seid, dann drückt es fest und das Spiel kann beginnen!</p>
            <p>P.S. ich habe versucht keine Fehler bei den Antworten rein zu arbeiten. Die schriftlichen Antworten gehen sowohl als Groß auch auch als klein geschriebenen Anfangsbuchstaben.</p>
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
