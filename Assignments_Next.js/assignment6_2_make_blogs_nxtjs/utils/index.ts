

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



export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};