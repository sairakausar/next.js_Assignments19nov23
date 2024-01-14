import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";

import React from "react";

const ShowMoreDetails = (props: any) => {
    
    // const { title, price, category, image } = props.product; can destruture this way or as doing below as props.product.title
    
  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-md transform overflow-hidden rounded-2xl
                 bg-teal-100 p-6 text-left align-middle shadow-xl transition-all lg:bg-emerald-100 
     md:bg-orange-300  sm:bg-slate-300"
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Details
                  </Dialog.Title>
                  <div className="relative h-48  mx-16 border border-amber-500">
                    <Image src={props.product.image} fill alt="" />
                  </div>
                  <div className="mt-2">{props.product.title}</div>
                  <div className="font-bold">
                    Price: $ {props.product.price}
                  </div>
                  <div>Category: {props.product.category}</div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center border border-transparent
                       bg-blue-700 rounded-full px-4 py-2 text-sm font-medium text-yellow-200
                       hover:bg-emerald-700 hover:text-white focus:outline-none  border-b-4
                       border-rose-700 focus-visible:ring-2 focus-visible:ring-blue-500 
                       focus-visible:ring-offset-2 "
                      onClick={props.closeModal}
                    >
                      Show Other Products
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ShowMoreDetails;
