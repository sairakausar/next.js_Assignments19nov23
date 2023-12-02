

export default async function getUserPosts() {
   const userPost =  await fetch("https://jsonplaceholder.typicode.com/posts")
  return userPost.json( )
}
