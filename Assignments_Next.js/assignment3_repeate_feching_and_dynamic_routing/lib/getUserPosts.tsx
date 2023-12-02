

export default async function getUserPosts() {
    const userPost = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${}`)
    
    // how ew know how we put https://jsonplaceholder.typicode.com/posts?id=  it mean
    //                                                          mean =  ?id=
  return userPost.json( )
}
