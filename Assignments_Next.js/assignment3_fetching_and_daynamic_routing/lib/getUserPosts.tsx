export default async function getUserPosts(userId: string) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com
      /posts?userId=${userId}`
  );

  if (!result.ok) throw new Error("failed to fetch user");
  return result.json();
}
