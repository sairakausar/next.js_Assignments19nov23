import Image from "next/image";
import { HeaderContact } from "./header_contact";
import { ContactUs } from "./contact_us";
import { FooterContact } from "./Footer_contact";

export default function Contact() {
    return (
        <main>
            <HeaderContact />
            <ContactUs />
            <FooterContact/>
        </main>
    )
}