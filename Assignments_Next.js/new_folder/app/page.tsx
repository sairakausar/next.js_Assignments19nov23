import Image from "next/image";
import CounterApp from "./components/counterApp";
import CheckinValue from "./components/checkinValue";
import ServiceApp from "./components/serviceApp";


export default function Home() {
  return (
    <main>
      Home
      <CounterApp />
      <CheckinValue />
      <ServiceApp />
    </main>
  );
}
