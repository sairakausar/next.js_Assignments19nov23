

export default async function getUserPosts(id) {
    const userPost = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
      if(!userPost.ok) throw new Error("Post fetch failed")
    return userPost.json();
    
    // how ew know how we put https://jsonplaceholder.typicode.com/posts?id=  it mean
    //                                                          mean =  ?id=
     
}
