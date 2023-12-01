import getUser from "@/lib/getUser";
// type Params = {
//     params: {
//         userId: string,
//     }
// }

interface Params {
    params: {
        userId: string
    }
}

export default async function userId({ params }: Params) {
   const getData = await getUser(params.userId); 
  return <div></div>;
}







