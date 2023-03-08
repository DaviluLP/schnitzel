import Link from 'next/link'
import Image from 'next/image'

export default function Quest_7() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-1"></div>
                    <div className="col">
                        <h2>Aufgabe 7</h2>
                        <p>Beim Brunnen denkt ihr an die Zahl und schaut euch um.</p>
                        <p>Wenn ihr diese Zahl wiedergefunden habt, dann geht rechts die Straße lang, bis zur nächsten Straße.</p>
                        <Link href={'./Quest_8'}>
                            <Image src='/bilder/Eichhoernchen.png' width={240} height={240} alt='Ninja Eichhoernchen'></Image>
                        </Link>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    )
}
