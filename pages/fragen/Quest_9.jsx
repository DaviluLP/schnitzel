import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export default function Quest_9() {
    const [answer, setAnswer] = useState(null)
    const [q2, setQ2] = useState(false)
    const [dis, setDis] = useState(true)

    function ans() {
        if (answer === '23') {
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
                        <h2>Aufgabe 9</h2>
                        <p>Auf dem Marktplatz angekommen vernehmt ihr ein sinnliches Glockenspiel.</p>
                        <p>Irgendwie sind die Glocken komisch angeordnet und ihr fangt an sie zu zählen.</p>
                        <p>Wie viele Glocken zählt ihr?</p>
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
                        <p>Euch fällt auf, diese Zahl habt ihr hier schon mal wo gesehen.</p>
                        <p>Wenn ihr die Ecke habt, dann geht durch die enge Gasse rechts daneben.</p>
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
                            <Link href={'./Final_Quest'}>
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
