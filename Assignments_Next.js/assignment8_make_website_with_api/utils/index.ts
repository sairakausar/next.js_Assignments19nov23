export  const FetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products')

   
    const result = await response.json()
    console.log(result);
    return result
    

}
 




// export const FetchData = async () => {
//   try {
//     const response = await fetch('https://fakestoreapi.com/products');
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const result = await response.blob();
//     // Handle the blob data as needed for your use case

//     return result;
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//     throw error;
//   }
// };
