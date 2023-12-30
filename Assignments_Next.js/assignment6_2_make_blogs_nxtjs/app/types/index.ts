import { MouseEventHandler } from "react"

export interface CustomButtonProps{
    title: string,
    containersStyles?: string,

    handleClick?: () => void,
    //or
    // handleClick:  MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit"
}
export interface CarProps {
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;

}






























