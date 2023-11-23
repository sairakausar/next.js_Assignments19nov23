import Image from 'next/image'
import Header from '../components/header'
import { Course } from '@/components/course';


export default function Home() {
  return (
    <main>
      <Header />
      <Course/>
      
    </main>
  );
}
