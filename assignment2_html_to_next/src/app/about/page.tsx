
import Image from "next/image";
import { Headers } from "./header_about";
import { AboutUs } from "./about_us"
import { HeadssAbout } from "./headss_about"

export default function About() {
    return (
        <main>
            <Headers />
            <AboutUs />
            <HeadssAbout/>
    </main>
)
}