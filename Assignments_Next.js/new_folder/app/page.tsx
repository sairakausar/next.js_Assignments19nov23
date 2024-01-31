import Image from "next/image";
import CounterApp from "./components/counterApp";
import CheckinValue from "./components/checkinValue";


export default function Home() {
  return (
    <main >

      Home
      <CounterApp />
      <CheckinValue />
    </main>
  );
}
