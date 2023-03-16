

export interface IHowItWorksCard {
    id: number;
    icon: string;
    text: string;
}


export interface HowItWorksState {
    card: IHowItWorksCard;
    theme: string;
}