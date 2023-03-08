import Link from 'next/link'
import Image from 'next/image'

export default function Quest_6() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-1"></div>
                    <div className="col">
                        <h2>Aufgabe 6</h2>
                        <p>Da seid ihr nun, am umgedrehtem Zuckerhut.</p>
                        <p>Ihr fragt euch wie spät es mitlerweile ist und bemerkt eine Rose.</p>
                        <p>Ihr merkt euch die Zahl über der Rose und denkt, eine Rose braucht im Sommer viel Wasser um hübsch aus zu sehen.</p>
                        <Link href={'./Quest_7'}>
                            <Image src='/bilder/Eichhoernchen.png' width={240} height={240} alt='Ninja Eichhoernchen'></Image>
                        </Link>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    )
}
