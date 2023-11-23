import Image from "next/image";
import Link from 'next/link'

const HeaderContact = () => {
    return (
         <section className="Sub-header">
        <nav>
            <Link href="/" className="logo">Xplore
                <i className="fab fa-staylinked"></i>skill
            </Link>
            <div className="nav-links" id="navLinks">
              
                {/* <i className="fa fa-times" onclick="hideMenu()"></i> */}
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/course">Course</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            {/* <i className="fa fa-bars" onclick="showMenu()"></i> */}
           
        </nav>
        <h1>Contact Us</h1>
    </section>
    )
}
export { HeaderContact };