"use client"

import { SearchManufacturer } from '@/app/components'
import { useState } from 'react'
import { SearchButton } from '@/app/components'
import Image from 'next/image'

const SearchBar = () => {
  const [manufacturer, SetmMnufacturer] = useState("")
  const [carModel , SetCarModel] = useState("")
  
 

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {e.target.value }
    
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