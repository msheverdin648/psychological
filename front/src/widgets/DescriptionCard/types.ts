import { ReactNode } from "react";
import { DescriptionCardThemes } from "./ui/DescriptionCard";


export interface IDescriptionCard {
    icon: ReactNode;
    title: string;
    text: string;   
}

export interface IDescriptionState{

    card: IDescriptionCard;
    theme: DescriptionCardThemes;    
}