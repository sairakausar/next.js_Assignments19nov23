

export async function fetchCars() {
   const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '98a84c6901msh3ee056210f3e2fdp13afcdjsna6c57d4a101d',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
}
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`;

    let result = await fetch(url, options) 
    let jsonResult = await result.json()
    return jsonResult
}