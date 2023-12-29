"use client";
import React from "react";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { manufacturers } from "./constants";

const SearchManufacturer = (props: any) => {
  // Who User write the this useSeate set the Query
  const [query, setQuery] = useState("");

  //start if statment
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((oneCarNamefromDataBase) => {
          return oneCarNamefromDataBase
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
        });

  //end if statment
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
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="CarCompanyName"
            //like props manfacture  come from SeachBar lafafa
            displayValue={(manufacturer: string) => manufacturer}
            // onChange={(event)=>event.target.value}
            onChange={(event) => setQuery(event.target.value)}
          ></Combobox.Input>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option value={query}>{query}</Combobox.Option>
              ) : (
                filteredManufacturers.map((singleFilterMaufacturer) => {
                  return (
                    <Combobox.Option value={singleFilterMaufacturer}>
                      Nother here
                    </Combobox.Option>
                  );
                })
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
