import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2 m-12  ">
        <div className="relative h-64 border-2 border-black lg:col-span-2 md:col-span-2 sm:col-span-full">
          A
        </div>

        <div className="relative min-h-64 border-2 border-black lg:row-span-2 md:row-span-2 sm:row-span-1">
          B
        </div>

        <div className="relative min-h-64 border-2 border-black lg:row-span-2 md:row-span-2 sm:row-span-1">
          C
        </div>

        <div className="relative h-64 border-2 border-black ">
          D
        </div>

        <div className="relative h-64 border-2 border-black lg:col-span-2 md:col-span-2 sm:col-span-full">
          E
        </div>
      </div>
    </main>
  );
}
