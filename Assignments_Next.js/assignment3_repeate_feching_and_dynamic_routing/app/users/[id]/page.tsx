import getUser from "@/lib/getUser";
import Link from "next/link";
// type Params = {
//     params: {
//         userId: string,
//     }
// }

// interface Params {
//     params: {
//         userId: string
//     }
// }

export default async function userPage({ params }: any) {
    const getData = await getUser(params.id);
    return (
      <div style={{ color: "Purple" }}>
        {" "}
        {/*style Put in 2 Curly Braket when put in not style.css */}
        <b>
          {/* use b tag for Bold */}
          {getData.name}
        </b>
        <br />
        <Link href="/users">Back to Users</Link>
      </div>
    );
}