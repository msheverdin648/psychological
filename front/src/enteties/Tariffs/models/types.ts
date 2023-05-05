

export interface ITariff {
    id: number;
    title: string;
    prev_price: number;
    discount?: number;
    info?: string;
    sessions: number;
}