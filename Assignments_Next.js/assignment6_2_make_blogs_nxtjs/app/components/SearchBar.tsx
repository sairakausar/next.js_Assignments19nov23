"use client"

import { SearchManufacturer } from '@/app/components'
import { useState } from 'react'

const SearchBar = () => {
const [manufacturer, SetmMnufacturer] = useState("1234")

    const handleSearch = () => { }
    
    return (
      <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
          <SearchManufacturer
            manufacturer={manufacturer}
            SetmMnufacturer={SetmMnufacturer}
          />
        </div>
      </form>
    );
}

export default SearchBar