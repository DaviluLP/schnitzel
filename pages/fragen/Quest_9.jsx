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
                        <p>Auf dem Marktplatz angekommen vernehmt ihr ein sinnliches Glockenspiel.</p>
                        <p>Irgendwie sind die Glocken komisch angeordnet und ihr fangt an sie zu zählen.</p>
                        <p>Euch fällt auf, diese Zahl habt ihr hier schon mal wo gesehen.</p>
                        <p>Wenn ihr die Ecke habt, dann geht durch die enge Gasse rechts daneben.</p>
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
