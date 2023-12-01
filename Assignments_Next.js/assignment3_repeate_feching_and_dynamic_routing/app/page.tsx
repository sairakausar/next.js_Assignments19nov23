import Image from 'next/image'
import Link from 'next/link'


export default function Home() {

  return (

    <main>
      Home Page
      <br/>
      <Link href = "/users">user</Link>
    </main>
  )
}
