

export default async function getUser(id: string) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`
            
  )
  return result.json();
}
// this fetching use for 1 user