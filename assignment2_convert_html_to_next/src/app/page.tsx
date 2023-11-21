import Image from "next/image";
import Header from "../Components/Header";
import { Course } from "../Components/Course";
import { Campus } from "../Components/Campus";
import { Facilities } from "../Components/Facilities";
import Testimonials from "../Components/Testimonials";
import { Call_to_Action } from "../Components/Call_to_Action"
import { Footer } from "@/Components/Footer";

 {/* //..................... */}
import AboutUs from "@/Components/About/About_page";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Course></Course>
      <Campus />
      <Facilities />
      <Testimonials />
      <Call_to_Action></Call_to_Action>
      <Footer></Footer>
      {/* //..................... */}
      <AboutUs></AboutUs>

      {/* //..................... */}
    </main>
  );
}
