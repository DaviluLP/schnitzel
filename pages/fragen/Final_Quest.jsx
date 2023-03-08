import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Collapse from 'react-bootstrap/Collapse'

export default function Final_Quest() {
    const [answer1, setAnswer1] = useState(null)
    const [answer2, setAnswer2] = useState(null)
    const [q2, setQ2] = useState(false)
    const [dis, setDis] = useState(true)
    const [open, setOpen] = useState(false)

    function ans() {
        if (answer1 === 'Nordsee' && answer2 > 0.01 || answer1 === 'nordsee' && answer2 > 0.01) {
            return setDis(false)
        } else {
            return setDis(true)
        }
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-1"></div>
                    <div className="col">
                        <h2>Aufgabe 10</h2>
                        <p>Was für ein komischer Vogel ist denn hier? Er zeigt euch den Weg zu einem deutschem Meer.</p>
                        <p>Wie heist dieses?</p>
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Antwort"
                                    onChange={(e) => setAnswer1(e.target.value)} />
                            </Form.Group>
                        </Form>
                        <p>Ihr beschließt entgegen der Strömung zu laufen und hofft dort euer Geschäft zu finden.</p>
                        <p>Nach dem Tode und noch viel weiter habt ihr das Gefühl euch wieder verlaufen zu haben, dann wird die Route neu berechnet. Die Route links daran vorbei ist viel zu verlockend und ihr geht dort lang.</p>
                        <p>Dort hinten seht ihr endlich euer lang ersehntes Geschäft auf der rechten Seite. Nach der langen Reise mit den ganzen Strapazen gönnt ihr euch endlich euer lang ersehntes Antibiotika-Schnitzel. Fragt doch mal nach dem Preis für ein Schnitzel.</p>
                        <p>Bitte Preis eingeben.</p>
                        <Form>
                            <Form.Group>
                                <Form.Control type="number" placeholder="Antwort"
                                    onChange={(e) => setAnswer2(e.target.value)} />
                            </Form.Group>
                            <p>
                            <Button onClick={ans}>
                                Antwort
                            </Button>
                            </p>
                        </Form>
                        <p className='mt-3'>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="tipp3"
                                aria-expanded={open}
                            >Tipp</Button>
                        </p>
                        <Collapse in={open}>
                            <div id='tipp3'>
                                <div className="card card-body">Schlachterei Tolle neben der Apotheke beim Bahnhof.</div>
                            </div>
                        </Collapse>
                        <p>
                            <Button
                                onClick={() => setQ2(!q2)}
                                aria-expanded={q2}
                                disabled={dis}
                            >Bestätigen</Button>
                        </p>
                        {q2 !== true ? (
                            <Image src='/bilder/Eichhoernchenbw.png' width={240} height={240} alt='Ninja Eichhoernchen'></Image>
                        ) : (
                            <Link href={'./Goal'}>
                                <Image src='/bilder/Eichhoernchen.png' width={240} height={240} alt='Ninja Eichhoernchen'></Image>
                            </Link>
                        )}
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    )
}
