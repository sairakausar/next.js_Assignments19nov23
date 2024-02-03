"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

import {Store} from "@/store/store";
import { Provider } from "react-redux";
// import {ServiceSlice} from "@/store/slices/serviceSlice"

export default function Home() {
  return (
    <main>
      <Navbar />

      <Provider store={Store}>
        <Hero />
      </Provider>,
    </main>
  );
}
