import Image from 'next/image'
import Header from '../components/header'
import { Course } from '@/components/course';
import {Campus} from "../components/campus"

export default function Home() {
  return (
    <main>
      <Header />
      <Course />
      <Campus />
      
    </main>
  );
}
