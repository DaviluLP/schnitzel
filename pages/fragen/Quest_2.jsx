import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Collapse from 'react-bootstrap/Collapse'

export default function Quest_2() {
    const [answer, setAnswer] = useState(null)
    const [q2, setQ2] = useState(false)
    const [dis, setDis] = useState(true)
    const [open, setOpen] = useState(false)

    function ans() {
        if (answer === '30') {
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
                        <h2>Aufgabe 2</h2>
                        <p>Nachdem ihr im Hotel <b>Deutsches Haus</b> die Nacht verbracht habt schaut ihr euch um.</p>
                        <p>Wie viele Doppelfenster sind über dem Eingang?</p>
                        <Form>
                            <Form.Group>
                                <Form.Control type="number" placeholder="Antwort"
                                    onChange={(e) => setAnswer(e.target.value)} />
                            </Form.Group>
                            <Button onClick={ans}>
                                Antwort
                            </Button>
                        </Form>
                        <p>Seht ihr etwas in der Gegend, was genau der Anzahl Doppelfenster entspricht von eurem Hotel?</p>
                        <p>Ihr habt was, dann geht dort durch den Haupteingang.</p>
                        <p className='mt-3'>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="tipp3"
                                aria-expanded={open}
                            >Tipp</Button>
                        </p>
                        <Collapse in={open}>
                            <div id='tipp3'>
                                <div className="card card-body">Es beginnt mit dem drittletztem Buchstaben deines Hotels.</div>
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
                            <Link href={'./Quest_3'}>
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
