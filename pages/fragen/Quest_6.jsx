import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Collapse from 'react-bootstrap/Collapse'

export default function Quest_6() {
    const [answer, setAnswer] = useState(null)
    const [q2, setQ2] = useState(false)
    const [dis, setDis] = useState(true)
    const [open, setOpen] = useState(false)

    function ans() {
        if (answer === '6') {
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
                        <h2>Aufgabe 6</h2>
                        <p>Da seid ihr nun, am umgedrehtem Zuckerhut.</p>
                        <p>Ihr fragt euch wie spät es mitlerweile ist und bemerkt eine Rose.</p>
                        <p>Ihr merkt euch die Zahl über der Rose und denkt, eine Rose braucht im Sommer viel Wasser um hübsch aus zu sehen.</p>
                        <p>Welche Zahl ist es?</p>
                        <Form>
                            <Form.Group>
                                <Form.Control type="number" placeholder="Antwort"
                                    onChange={(e) => setAnswer(e.target.value)} />
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
                                <div className="card card-body">Könnte dies auch ein Brunnen sein?</div>
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
                            <Link href={'./Quest_7'}>
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
