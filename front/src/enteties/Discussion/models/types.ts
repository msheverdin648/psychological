

export interface IDisscussionCard {
    text: string;
} 

export interface DisscussionState {
    cards: IDisscussionCard[];
    time: string;
    experience: boolean;
    name: string;
    email: string;
    phone: string;
} 