import Link from 'next/link'
import Image from 'next/image'

export default function Quest_4() {
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
                        <Link href={'./Quest_5'}>
                            <Image src='/bilder/Eichhoernchen.png' width={240} height={240} alt='Ninja Eichhoernchen'></Image>
                        </Link>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    )
}
