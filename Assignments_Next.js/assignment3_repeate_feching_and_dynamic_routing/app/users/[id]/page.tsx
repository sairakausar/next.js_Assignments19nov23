import Link from "next/link"
import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts";

// interface Params {
//   params: {
//     id: string
//   }
// }
// this is type 
// this is the formula of routing  of slug  for Dynamic routing                           
export default async function page({ params }: { params: { id: string } }) {
  const getData = await getUser(params.id);
  const getFetchPosts = await getUserPosts(params.id);
  return (
    <section>
      <div style={{ color: "Green" }}>
        <b>{getData.name}</b>

        <br />
        {getFetchPosts.body}
        <br/>
      </div>
      <Link href="/users">Back to User</Link>
    </section>
  );
}