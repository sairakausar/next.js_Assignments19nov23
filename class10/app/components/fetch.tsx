import { log } from "console";


export const apires = async ()=>{}
const apiresponse = await fetch("https://dummyjson.com/auth/login")
const result = await apiresponse.json()
return (
    console.log(result);
    
);
    
//     , {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
// //   body: JSON.stringify({
//     username: "kminchelle",
//     password: "0lelplR",
//     // expiresInMins: 60, // optional
//   }),
// }
//   .then((res) => res.json())
//   .then(console.log);