import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Collapse from 'react-bootstrap/Collapse'

export default function Quest_8() {
    const [answer, setAnswer] = useState(null)
    const [q2, setQ2] = useState(false)
    const [dis, setDis] = useState(true)
    const [open, setOpen] = useState(false)

    function ans() {
        if (answer === 'Marktplatz' || answer === 'marktplatz') {
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
                        <h2>Aufgabe 8</h2>
                        <p>Bei dem Schuhster (Schuhstr.) angekommen denkt ihr, ihr findet das Geschäft nie.</p>
                        <p>Ihr schaut euch um und bemerkt dass ihr euch ein wenig verlaufen habt.</p>
                        <p>Ihr überlegt und auf den Begriff Schuhster fallen euch ältere Gebäude ein, vielleicht würdet ihr dort mehr <b>Informationen</b> bekommen und war dort nicht erst eine grüne Demo?</p>
                        <p>Welchen Platz suchen wir?</p>
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Antwort"
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
                                aria-controls="tipp8"
                                aria-expanded={open}
                            >Tipp</Button>
                        </p>
                        <Collapse in={open} className='mb-3'>
                            <div id='tipp8'>
                                <div className="card card-body">Wenn ihr Glück habt, könnt ihr an einer Ladentür noch ein grünes Plakat sehen.</div>
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
                            <Link href={'./Quest_9'}>
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
