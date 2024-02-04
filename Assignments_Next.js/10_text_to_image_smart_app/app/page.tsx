import Image from "next/image";
import PageTextToImageGenerator from "./testToImageGenerator/page";
import Component from "./navbar";

export default function Home() {
  return (
    <main >
  <Component/>
  <PageTextToImageGenerator/>
    </main>
  );
}
