import Link from "next/link"
import getUser from "@/lib/getUser"

// interface Params {
//   params: {
//     id: string
//   }
// }
// this is type 
// this is the formula of routing                               
export default async function page({ params }: { params: { id: string } }) {
  const getData = await getUser(params.id);
  return (
    <section>
      <div style={{ color: "Green" }}>
        <b>{getData.name}</b>

        <br />
      </div>
      <Link href="/users">Back to User</Link>
    </section>
  );
}