

export default async function getAllUsers() {  // when data fetch then take data from any websit or online
  const result =  await fetch("https://jsonplaceholder.typicode.com/users");  // use await is data is async
    return result.json()
      
   
  
}

// we take all user in lib folder and make tsx file for getting All users
// it fetch use for all the data
