import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
    return(
   
    <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Link href="/contact" className="hero_btn">CONTACT US</Link>
    </section>
  
    )
}
export{CallToAction}