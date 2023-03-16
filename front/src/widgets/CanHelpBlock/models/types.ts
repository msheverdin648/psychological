

export const enum iconPosition {
    LEFT='left',
    RIGHT='right'
} 


export interface ICircleCard {
    id: number;
    text: string;
    icon: string;
    icon_position: iconPosition;
}