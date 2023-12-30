import Image from 'next/image'
import { Hero, SearchBar, CustomFilter,CarCard } from "./components";

import { fetchCars } from '@/utils';
import { log } from 'console';



//utils ka index.ts also use in it. we make page also async 
export default async function Home() {
  const allCars = await fetchCars()
  console.log(allCars);

  const noHaveCar = !Array.isArray(allCars) || allCars.length === 0 || !allCars; 
  
  return (
    <main className="overflow-hidden">
      <Hero />
      {/* padding-x = 1rem */}
      <div
        className="mt-12 padding-x padding-y 
    max-width"
        id="discover"
      >
        <div className="home__text-container">
          <h1 className="text.4xl font-extrabold">Car Catalogure</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {noHaveCar ? (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Opss, we no Have CAr</h2>
            {/* <p>{allCars?.message }</p> */}
          </div>
        ) : (
          <section>
            <h1>We have Car</h1>
            <div className="home__cars-wrapper">
              {allCars.map((Car) => {
                return (
                  <>
                    {/* {Car.make} */}
                    {/* {TitleofCar = "Car"} */}

                    <CarCard CallforCarCard={Car} />
                  </>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
