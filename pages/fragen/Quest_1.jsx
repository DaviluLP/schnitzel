import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import cookie from 'cookie'

export default function Quest_1() {
  const [answer, setAnswer] = useState(null)
  const [q2, setQ2] = useState(false)
  const [dis, setDis] = useState(true)
  
  
  // var cookie = require('cookie')
  
  
  function ans() {
    if (answer === "hotel" || answer === "Hotel") {
      return setDis(false)
    } else {
      return setDis(true)
    }
  }

  const cook = () => {
    // var token = cookie.parse('quest2', {
    //   maxAge: 60*120,
    //   sameSite: 'strict',
    //   path: '/'
    // })
    var setCookie = cookie.serialize('answers', 'quest2', {
      maxAge: 60*120,
      sameSite: 'strict',
      path: '/'
    })
  }
  



  return (
    <div>
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-1"></div>
          <div className="col">
            <h2>Aufgabe 1</h2>
            <p>Stellt euch vor, ihr wollt nach Deutschland reisen, was sucht ihr dort zum übernachten?</p>
            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="Antwort"
                  onChange={(e) => setAnswer(e.target.value)}/>
              </Form.Group>
              <Button onClick={ans}>
                Antwort
              </Button>
            </Form>
            <p> Dies ist wohl euer erstes Ziel.</p>
            <p>
              <Button
                onClick={() => setQ2(!q2)}
                aria-expanded= {q2}
                disabled= {dis}
              >Bestätigen</Button>
            </p>
            {q2 !== true ? (
              <Image src='/bilder/eichhoernchenbw.png' width={240} height={240} alt='Ninja Eichhoernchen'></Image>
            ) : (
            <Link href={'./Quest_2'} onClick={cook}>
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
