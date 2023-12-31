// rafce
import React from 'react'

interface User {
    id: number;
    name: string
}

const UsersPage = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users",
      
    { cache: 'no-store' }  //,
    //     {next: {revalidate: 10}}   // every 10 secnd refresh data
    );
    const users: User[] = await result.json();
    return (
      <>
            <h1>UsersPage</h1>
            <p>{ new Date().toLocaleTimeString() }</p>
            <ul>
                {users.map(user => <li key={user.id} > { user.name}</li>)}
            </ul>
            
      </>
    );
}

export default UsersPage