import { Discussion } from 'enteties/Discussion';


export interface IDiscussionThemes {
    id: number;
    name: string;
} 


export interface IDiscussionDateCard {
    id: number;
    date: string;
    time: string;
}


export interface IDay {
    id: number;
    date: string;
    time_slots: ITimeSlot[];
}


export interface ITimeSlot {
    id: number;
    start_time: string;
    end_time: string;
}

export interface FeedbackFormState {
    name: string;
    email: string;
    phone: string;
}


export interface DiscussionDateState {
    cards: IDiscussionDateCard[];
}

export interface DiscussionThemestate {
    cards: IDiscussionThemes[];
} 

export interface IClient{
    experience: boolean;
    name: string;
    email: string;
    phone: string;
}

export interface IAppointment {
    discussion_themes: number[];
    time_slot: number;
    client: IClient;
}

export interface DiscussionState {
    discussion_themes: IDiscussionThemes[];
    time_slot: IDiscussionDateCard | null;
    client: IClient;
    totalPages: number;
    curPage: number;
    fixedPagesCount: number;
} 

