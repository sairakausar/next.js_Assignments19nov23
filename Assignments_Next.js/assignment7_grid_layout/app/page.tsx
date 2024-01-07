
import GridLayout from './component/gridLayout';
import Navbar from './component/navbar';

export default function Home() {
  return (
    <main>

<Navbar/>



const GridLayout = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2 m-12  ">
        <div className="relative h-64 border-2 border-black lg:col-span-2 md:col-span-2 sm:col-span-full">
          <Image src="/public.pngA3.png" fill alt="imageA" />
        </div>

        <div className="relative min-h-64 border-2 border-black lg:row-span-2 md:row-span-2 sm:row-span-1">
          <Image src={ImageTwo} fill alt="imageB" />
        </div>

        <div className="relative min-h-64 border-2 border-black lg:row-span-2 md:row-span-2 sm:row-span-1">
          <Image src={ImageThree} fill alt="imageB" />
        </div>

        <div className="relative h-64 border-2 border-black ">
          <Image src={ImageFour} fill alt="imageB"  />
        </div>

        <div className="relative h-64 border-2 border-black lg:col-span-2 md:col-span-2 sm:col-span-full">
          <Image src={ImageFive} fill alt="imageB"  />
        </div>
      </div>
    </div>
    </main>
  );
}
