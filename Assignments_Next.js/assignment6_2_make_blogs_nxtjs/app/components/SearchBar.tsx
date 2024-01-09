"use client"

import { SearchManufacturer } from '@/app/components'
import { useState } from 'react'
import { SearchButton } from '@/app/components'
import Image from 'next/image'
import { useRouter } from "next/navigation";

const SearchBar = ({ setManufacturer, setModel }: any) => {
  const [searchManufacturer, SetSearchMnufacturer] = useState("");
  const [searchModel, SetSearchModel] = useState("");
  const Router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "" && searchModel === "") {
      return alert("Please fill in the blanks");
    }

    setModel(searchModel.toLowerCase(), searchManufacturer.toLowerCase());
  };



  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          SetSelectedr={SetSearchMnufacturer}
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
          value={searchModel}
          onChange={(e) => {
           SetSearchModel(e.target.value);
          }}
          placeholder="BMW"
          className="searchbar__item"
        />
      </div>
    </form>
  );
};

export default SearchBar