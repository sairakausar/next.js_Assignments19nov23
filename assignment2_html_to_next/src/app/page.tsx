import Image from 'next/image'
import Header from '../components/header'
import { Course } from '@/components/course';
import { Campus } from "../components/campus"
import { Facilities } from '@/components/facilities';
import { Testimonial } from '@/components/testimonial';
import { CallToAction } from '@/components/call_to_action';
import { Footer } from '@/components/Footer';
import { Headss } from '@/components/headss';

export default function Home() {
  return (
    <main>
      <Headss />
      <Header />
      <Course />
      <Campus />
      <Facilities />
      <Testimonial />
      <CallToAction />
      <Footer />
      
    </main>
  );
}
