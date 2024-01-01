"use client"

import { SearchManufacturer } from '@/app/components'
import { useState } from 'react'
import {SearchButton} from '@/app/components'

const SearchBar = () => {
  const [manufacturer, SetmMnufacturer] = useState("")
  
 

    const handleSearch = () => { }
    
    return (
      <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
          <SearchManufacturer
            manufacturer={manufacturer}
            SetmMnufacturer={SetmMnufacturer}
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>
      </form>
    );
}

export default SearchBar