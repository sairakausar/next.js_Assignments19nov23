import Image from "next/image";
import { HeaderContact } from "./header_contact";
import { ContactUs } from "./contact_us";

export default function Contact() {
    return (
        <main>
            <HeaderContact />
            <ContactUs/>
        </main>
    )
}