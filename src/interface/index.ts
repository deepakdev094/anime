import { ReactNode } from "react";
export interface propsCardData {
    image: string,
    rank: number,
    rating: string,
    title: string,
    release_date: string,
    lastest_date: null | string
    year: string
}


export interface PropsContext {
    children: ReactNode
}