'use client'

import { Fragment, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Listbox, Transition } from '@headlessui/react'
import {CustonFilterProps} from '@/app/types'



const CustomFilter = ({ titleChangeName, options }: CustonFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.title}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <Image
                src="/chevron-up-down.svg"
                width={20}
                height={20}
                className="ml-4 object-contain"
                alt="chevron up down"
              />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  // key={option}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-1 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.title}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter