import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Collapse from 'react-bootstrap/Collapse'

export default function Goal() {
    const [q2, setQ2] = useState(false)
    const [dis, setDis] = useState(false)
    const [open, setOpen] = useState(false)

  return (
    <div>
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-1"></div>
                    <div className="col">
                        <h2>Herzlichen Glückwunsch!</h2>
                        <p>Wir hoffen euch hat die Schnitzeljagd gefallen und ihr könnt jetzt gerne nach einem Kaffee bei der Tagesklinik erscheinen.</p>
                        <p>Danke nochmal, dass ihr die Seite genutzt habt und ich hoffe, es war nicht zu schwer oder zu kompliziert.</p>
                        <p>Ich habe zumindest mein bestes versucht in nur zwei abenden. xD</p>
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
                            <Link href={'/'}>
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
