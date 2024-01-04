"use client"

import { SearchManufacturer } from '@/app/components'
import { useState } from 'react'
import { SearchButton } from '@/app/components'
import Image from 'next/image'
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [manufacturer, SetmMnufacturer] = useState("")
  const [carModel, SetCarModel] = useState("")
  const Router = useRouter();
  

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (manufacturer === "" && carModel === "" ) {
      return alert('Please fill in the blanks')
    }

    updateSearchParams(
      carModel.toLowerCase(), manufacturer.toLowerCase())

  }

  const updateSearchParams = (carModel: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (carModel) {
      searchParams.set("model", carModel);
    } else {
      searchParams.delete('model')
    }
   


     if (manufacturer) {
       searchParams.set("Manufacturer", manufacturer);
     } else {
       searchParams.delete("Manufacturer");
    }
    // ya samjna ha ?
   const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
Router.push(newPathname);
  }

    return (
      <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
          <SearchManufacturer
            manufacturer={manufacturer}
            SetmMnufacturer={SetmMnufacturer}
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <div className="searchbar__item">
          {/* //why icon erase */}
          <Image
            src="/model-icon.png"
            width={25}
            height={25}
            className="absolute w-{20px} h-{20px} ml-4"
            alt="car model"
          />
          <input
            type="text"
            name="model"
            value={carModel}
            onChange={(e) => {
              SetCarModel(e.target.value);
            }}
            placeholder="BMW"
            className="searchbar__item"
          />
        </div>
      </form>
    );
}

export default SearchBar