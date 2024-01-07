import { CarProps , FilterProps} from "@/app/types";


export async function fetchCars(filters: FilterProps) {
   const {manufacturer, year, model, limit, fuel} = filters

   const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '98a84c6901msh3ee056210f3e2fdp13afcdjsna6c57d4a101d',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
}
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;

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

export const generateCarImageUrl = (CallforCarCard: CarProps, angle?: string) => {
  const url = new URL('https://www.imagin.studio');

  const { make, year, model } = CallforCarCard
  
  url.searchParams.append('customer',  '')
  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', ' fullscreen')
  url.searchParams.append('modelYear', `${year}`)
  url.searchParams.append('angle', `${angle}`)
  return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {
   const searchParams = new URLSearchParams(window.location.search);

    // if (carModel) {
    searchParams.set("type", type);
    // } 
    // else {
    // searchParams.delete("model");
    // }

    // if (value) {
    searchParams.set("value", value);
    // }
    //  else {
    //   searchParams.delete("value");
  // }
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`
  
  return newPathname
  
}

 



