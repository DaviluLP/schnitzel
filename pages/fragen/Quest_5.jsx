import Link from 'next/link'
import Image from 'next/image'

export default function Quest_5() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-1"></div>
                    <div className="col">
                        <h2>Aufgabe 5</h2>
                        <p>Ihr sucht beim Hohen Weg nach dem Geschäft, doch seht ihr nur wieder das Geschäft mit der Anzahl der Fenster.</p>
                        <p>Ihr fragt nach dem Weg und erfahrt, dass ihr zu weit gelaufen seid.</p>
                        <p>Ihr werdet zu einem umgedrehten, süßen Haus geschickt. Nur was meinen die damit?</p>
                        <Link href={'./Quest_6'}>
                            <Image src='/bilder/Eichhoernchen.png' width={240} height={240} alt='Ninja Eichhoernchen'></Image>
                        </Link>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    )
}
