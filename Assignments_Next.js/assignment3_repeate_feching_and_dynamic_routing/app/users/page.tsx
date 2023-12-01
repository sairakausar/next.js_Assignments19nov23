import getAllUsers from "@/lib/getAllUsers"
import Link from "next/link";

export default async function BacktoHome() {
    const users = await getAllUsers()

    const content = (
      <section>
        <Link href={"/"}>Back to Home</Link>   
         {/* this back_to_Home is clikable */}

        

        {users.map((user: any) => {
          return (
            <p style={{ fontSize: "20px", color: "red" }}>
              <Link href={`/users/${user.id}`}>
                <b>{user.name}</b>
              </Link>
            </p>
          );
        })}
      </section>
    );          
          {/* curly Breket mean start java and start TypeScript */}
             {/* <></> mean start HTML or CSS */}                                                             
                         
  return content 
}
