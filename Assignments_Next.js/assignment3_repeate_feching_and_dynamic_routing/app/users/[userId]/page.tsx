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
    return (
        <div style={{ color: "Purple" }}>  {/*style Put in 2 Curly Braket when put in not style.css */}
            <b>
                {/* use b tag for Bold */}
                {getData.name}
            </b>
        </div>)
}







