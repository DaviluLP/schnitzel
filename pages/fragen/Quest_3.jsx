import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Collapse from 'react-bootstrap/Collapse'


export default function Quest_3() {
    const [answer, setAnswer] = useState(null)
    const [q2, setQ2] = useState(false)
    const [dis, setDis] = useState(true)
    const [open, setOpen] = useState(false)

    function ans() {
        if (answer === 'o2' || answer === 'O2' || answer === 'o²' || answer === 'O²') {
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
                        <h2>Aufgabe 3</h2>
                        <p>Du bist nun in der Arneken angekommen, findest aber kein passendes Geschäft für dich und beschließt den Lageplan zu studieren.</p>
                        <p>Welches Geschäft hat nur diese Nummer? (kürzel reicht)</p>
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Antwort"
                                    onChange={(e) => setAnswer(e.target.value)} />
                            </Form.Group>
                            <Button onClick={ans}>
                                Antwort
                            </Button>
                        </Form>
                        <p>Dich hat die Anzahl der <b>Fenster</b> fasziniert und beschließt diese Route bis zum <b>orangenen Knotenpunkt</b> zu nehmen.</p>
                        <p className='mt-3'>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="tipp3"
                                aria-expanded={open}
                            >Tipp</Button>
                        </p>
                        <Collapse in={open}>
                            <div id='tipp3'>
                                <div className="card card-body">Die Zahl war im übrigen 30. Schaut mal bei den Geschäften nach.</div>
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
                            <Link href={'./Quest_4'}>
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
