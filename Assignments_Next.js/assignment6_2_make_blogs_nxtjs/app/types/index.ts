import { MouseEventHandler } from "react"

export interface CustomButtonProps{
    title: string,
    containersStyles?: string,

    handleClick: () => void,
    //or
    // handleClick:  MouseEventHandler<HTMLButtonElement>,
}






























