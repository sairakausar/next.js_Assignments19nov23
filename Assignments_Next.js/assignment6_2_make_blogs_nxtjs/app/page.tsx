'use client'

import Image from 'next/image'
import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "./components";

import { fetchCars } from '@/utils';
import { log } from 'console';
import { manufacturers } from './components/constants';
import { fuels } from './components/constants';
import { yearsOfProduction } from './components/constants';
import { useEffect, useState } from 'react';
                                                   
                                                  
                                                                          
//utils ka index.ts also use in it. we make page also async 

// search param khan sa aya come automatically
export default function Home() {
  const [allCars, setAllCars] = useState([])
   const [loading, setLoading] = useState(false);
  const [manufacturer, setManufacturer] = useState("")
  const [model, setModel] = useState("")
  const [fuel, setFuel] = useState("")
  const [year, setYear] = useState(202)
  const [limit, setLimit] = useState(10)
  
  const getCars = async () => {
    setLoading(true)
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setAllCars(result);

      console.log(allCars);
    }
    catch(error) {
      console.log(error);
      
    } finally {
      setLoading(false)
    }

  }
  useEffect(() => {
    console.log(fuel, year, limit , manufacturer, model);
    
    getCars( );
  }, [limit,year, fuel, model, manufacturer, loading, allCars]
  )

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
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {noHaveCar ? (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Opss, we no Have CAr
            </h2>
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
            {loading && (
              <div className=" w-full flex justify-center">
                <Image
                  src="/car-logo.svg"
                  alt="loading"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        )}
      </div>
    </main>
  );
}
