import { title } from "process";
import { MouseEventHandler } from "react"

export interface CustomButtonProps{
    title: string,
    containersStyles?: string,

    handleClick?: () => void,
    //or
    // handleClick:  MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}
export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
};
  

export interface FilterProps{
    
    manufacturer:  string,
    year: number,
    fuel: string,
    limit: number,
    model:  string,
  
}



export interface CustonFilterProps {
    
    titleChangeName: string,
    options: [
        {
            title: string,
            value: string,
        }]
}
































