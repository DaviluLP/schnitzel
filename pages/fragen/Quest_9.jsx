import Link from 'next/link'
import Image from 'next/image'

export default function Quest_9() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-1"></div>
                    <div className="col">
                        <h2>Aufgabe 9</h2>
                        <p>Nachdem ihr im Hotel "Deutsches Haus" die Nacht verbracht habt schaut ihr euch um.</p>

                        <p>Seht ihr etwas in der Gegend, was genau der Anzahl Doppelfenster entspricht von eurem Hotel?</p>
                        <p>Ihr habt was, dann geht dort durch den Haupteingang.</p>
                        <Link href={'./Final_Quest'}>
                            <Image src='/bilder/Eichhoernchen.png' width={240} height={240} alt='Ninja Eichhoernchen'></Image>
                        </Link>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    )
}
