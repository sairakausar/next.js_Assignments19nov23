import Image from "next/image";
import { HeaderCourse } from "./header_course";
import { StartCourse } from "./start_course";
import { BestCourse } from "./best_course";
import { FooterCourse } from "./footer_course";
import { HeadssCourse } from "./headsscourse"


export default function Course() {
    return (
        <main>
            <HeaderCourse />
            <StartCourse />
            <BestCourse />
            <FooterCourse />
            <HeadssCourse />
        </main>
    )
}