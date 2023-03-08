import Link from 'next/link'
import Image from 'next/image'

export default function Final_Quest() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-1"></div>
                    <div className="col">
                        <h2>Aufgabe 10</h2>
                        <p>Was für ein komischer Vogel ist denn hier? Er zeigt euch den Weg zu einem deutschem Meer.</p>
                        <p>Ihr beschließt entgegen der Strömung zu laufen und hofft dort euer Geschäft zu finden.</p>
                        <p>Nach dem Tode und noch viel weiter habt ihr das Gefühl euch wieder verlaufen zu haben, dann wird die Route neu berechnet. Die Route links daran vorbei ist viel zu verlockend und ihr geht dort lang.</p>
                        <p>Dort hinten seht ihr endlich euer lang ersehntes Geschäft auf der rechten Seite. Nach der langen Reise mit den ganzen Strapazen gönnt ihr euch endlich euer lang ersehntes Antibiotika-Schnitzel. Fragt doch mal nach dem Preis für ein Schnitzel.</p>
                        <Link href={'/'}>
                            <Image src='/bilder/Eichhoernchen.png' width={240} height={240} alt='Ninja Eichhoernchen'></Image>
                        </Link>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    )
}
