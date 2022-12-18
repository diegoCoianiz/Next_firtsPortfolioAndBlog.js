import Link from "next/link"

const Navbar = () => (

    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
            <Link href="/" className="nav-link active mx-5" aria-current="page">
                <h4>My Portfolio</h4>
            </Link>
        </div>
        <div className="container-fluid">
        <ul className="navbar-nav">
            <li className="nav-item mx-3" key={"1"}>
                <Link href="/blog" className="nav-link active" aria-current="page">
                    <h5>Blog</h5>
                </Link>
            </li>
            <li className="nav-item mx-3" key={"2"}>
                <Link href="/contact" className="nav-link active" aria-current="page">
                    <h5>Contact</h5>
                </Link>
            </li>
            <li className="nav-item mx-3" key={"3"}>
                <Link href="/github" className="nav-link active" aria-current="page">
                    <h5>Github</h5>
                </Link>
            </li>
            {/* <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li> */}
        </ul>
        </div>
    </nav>

)

export default Navbar