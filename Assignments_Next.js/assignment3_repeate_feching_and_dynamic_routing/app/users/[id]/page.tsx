import Link from "next/link"
import getUser from "@/lib/getUser"

interface Params {
  params: {
    id: string
  }
}                                    
export default async function page({ params }: Params) {
  const getData = await getUser(params.id)
  return (
    <div style={{ color: "Green" }}>
      <b>{getData.name}</b>

      <br />

      <Link href="/users">Back to User</Link>
    </div>
  );

}