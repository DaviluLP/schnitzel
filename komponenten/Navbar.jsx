import Link from "next/link"

export default function Navbar() {
  
    return (
      <div className="bg-secondary">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-light">
                <li className="breadcrumb-item" aria-current="page">
                    <Link href={'/'} className="link-light">Home</Link>
                </li>
            </ol>
        </nav>
      </div>
    )
  
}