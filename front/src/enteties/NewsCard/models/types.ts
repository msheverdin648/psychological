import { ReactNode } from 'react';


export interface INews {
    id: number;
    title: string;
    img: string;
    date: Date;
}

export interface NewsState {
    news: INews[];
}