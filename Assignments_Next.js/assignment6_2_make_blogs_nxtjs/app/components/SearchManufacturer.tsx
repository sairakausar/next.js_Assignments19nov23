'use client'
import React from 'react'
import Image from 'next/image';
import { Combobox, Transition } from "@headlessui/react";

const SearchManufacturer = (props:any) => {
    return (
      <div className="search-manufacturer">
        <Combobox>
          <div className="ralative w-full">
            <Combobox.Button
              className="absolute top-[4px]"
              style={{
                border: "1px solid black",
              }}
            >
              <Image
                src="/car-logo.svg"
                width={20}
                height={20}
                className="ml-4"
                alt="Car Logo"
              />
            </Combobox.Button>
                    <Combobox.Input className="search-manufacturer__input"
                        placeholder="CarCompanyName"
                        displayValue={(manufacturer: string) => manufacturer}
                        
                    >
                        

            </Combobox.Input>
          </div>
        </Combobox>
      </div>
    );
};

export default SearchManufacturer