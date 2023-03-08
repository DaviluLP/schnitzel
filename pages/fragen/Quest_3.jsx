import Link from 'next/link'
import Image from 'next/image'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import { useState } from 'react'

export default function Quest_3() {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-1"></div>
                    <div className="col">
                        <h2>Aufgabe 3</h2>
                        <p>Du bist nun in der Arneken angekommen, findest aber kein passendes Geschäft für dich und beschließt den Lageplan zu studieren.</p>
                        <p>Dich hat die Anzahl der <b>Fenster</b> fasziniert und beschließt diese Route bis zum <b>orangenen Knotenpunkt</b> zu nehmen.</p>
                        <Link href={'./Quest_4'}>
                            <Image src='/bilder/Eichhoernchen.png' width={240} height={240} alt='Ninja Eichhoernchen'></Image>
                        </Link>
                        <p className='mt-3'>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="tipp3"
                                aria-espanded={open}
                            >Tipp</Button>
                        </p>
                        <Collapse in={open}>
                            <div id='tipp3'>
                                <div className="card card-body">Die Zahl war im übrigen 30. Schaut mal bei den Geschäften nach.</div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    )
}
