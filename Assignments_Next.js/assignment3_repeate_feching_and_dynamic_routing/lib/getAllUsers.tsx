import React from 'react'

export default async function getAllUsers() {
  const result =  await fetch("https://jsonplaceholder.typicode.com/users");
    return (
      
    <div>getAllUsers</div>
  )
}
