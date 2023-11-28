types Params = {
    params: {
      userId: string  
    }
}

export default function UserPage({params:{userId}}) {
  return (
    <div>page</div>
  )
}
