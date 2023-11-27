

export default async function getAllUsers() {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");    
   if(!result.ok) throw new Error('failed to fetch data') 
  
    return result.json ()
}

