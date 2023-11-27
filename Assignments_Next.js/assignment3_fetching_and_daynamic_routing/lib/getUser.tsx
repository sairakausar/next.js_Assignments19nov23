

export default async function getUser() {
    const result = await fetch('')
    
    if(!result.ok) throw new Error('failed to fetch user')
  return 
}
