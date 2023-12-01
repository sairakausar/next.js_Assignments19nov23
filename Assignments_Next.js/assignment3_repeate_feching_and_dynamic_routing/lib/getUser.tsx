

export default async function getUser(userId: string) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return result.json()
}
