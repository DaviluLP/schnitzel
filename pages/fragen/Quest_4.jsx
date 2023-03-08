import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Collapse from 'react-bootstrap/Collapse'

export default function Quest_4() {
    const [answer1, setAnswer1] = useState(null)
    const [answer2, setAnswer2] = useState(null)
    const [q2, setQ2] = useState(false)
    const [dis, setDis] = useState(true)
    const [open, setOpen] = useState(false)

    function ans() {
        if (answer1 === '4' && answer2 === 'rechts' || answer1 === '4' && answer2 === 'Rechts') {
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
                        <h2>Aufgabe 4</h2>
                        <p>Ihr seid nun die Straße bis zur Infotafel gelaufen, seid aber immer noch nicht fündig geworden.</p>
                        <p>Ihr beschließt Fremde nach dem Weg zu diesem Geschäft zu fragen.</p>
                        <p>Wie viele Heilige seht ihr bei der stelle? Der letzte Buchstabe der Zahl gibt euch die Richtung an, die ihr gehen müsst.</p>
                        <Form>
                            <Row className="mb-2">
                                <Col>
                                    <Form.Control type="number" placeholder="Anzahl Heilige?"
                                        onChange={(e) => setAnswer1(e.target.value)} />
                                </Col>
                                <Col>
                                    <Form.Control type="text" placeholder="Welche Richtung?"
                                        onChange={(e) => setAnswer2(e.target.value)} />
                                </Col>
                            </Row>
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
                                <div className="card card-body">Dreht euch so, dass die Tafel euch im Rücken liegt und schaut leicht nach oben.</div>
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
                            <Link href={'./Quest_5'}>
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
