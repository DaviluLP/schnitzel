import Image from "next/image"
import Link from "next/link"

export default function start() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-1"></div>
          <div className="col">
            <h2>Aufgabe 1</h2>
            <p>Stellt euch vor, ihr wollt nach Deutschland reisen, was sucht ihr dort zum übernachten?</p>
            <p> Dies ist wohl euer erstes Ziel.</p>
            <Link href={'./Quest_2'}>
              <Image src='/bilder/Eichhoernchen.png' width={240} height={240} alt='Ninja Eichhoernchen'></Image>
            </Link>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  )
}
