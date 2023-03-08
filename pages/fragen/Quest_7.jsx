import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export default function Quest_7() {
    const [answer, setAnswer] = useState(null)
    const [q2, setQ2] = useState(false)
    const [dis, setDis] = useState(false)

    return (
        <div>
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-1"></div>
                    <div className="col">
                        <h2>Aufgabe 7</h2>
                        <p>Beim Brunnen denkt ihr an die Zahl und schaut euch um.</p>
                        <p>Wenn ihr diese Zahl wiedergefunden habt, dann geht rechts die Straße lang, bis zur nächsten Straße.</p>
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
                            <Link href={'./Quest_8'}>
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
