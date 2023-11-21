import Image from 'next/image'
import '../styles/styles.css'

export default function Header() {
    return (
      <section className="header">
        <nav>
          <a href="index.html" className="logo">
            Xplore
            <i className="fab fa-staylinked"></i>kill
          </a>
          <div className="nav-links" id="navLinks">
            {/* <i className="fa fa-times" onclick="hideMenu()"></i> */}
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="course.html">Course</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          {/* <i className="fa fa-bars" onclick="showMenu()"></i> */}
        </nav>

        <div className="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <a href="#" className="hero_btn">
            Visit Us To Know More
          </a>
        </div>
      </section>
    );
}