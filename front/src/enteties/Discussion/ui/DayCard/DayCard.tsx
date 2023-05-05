import { classNames } from 'shared/lib/classNames/classNames';
import cls from './DayCard.module.scss';
import { IDay } from 'enteties/Discussion/models/types';
import { useState } from 'react';

interface DayCardProps {
    className?: string;
    card: IDay;
    isActive?: boolean;
}

export const DayCard: React.FC<DayCardProps> = (props) => {
    const { 
        card, 
        isActive=false 
    } = props;
    const [cardProps] = useState(
        {
            id: card.id,
            date: new Date(card.date).toLocaleString('ru-RU', {
                day: 'numeric',
                month: 'short',
                weekday: 'short',
            }),
            
        }
    )

    return (
        <div 
            className={classNames(cls.card, {[cls.active]: isActive}, [])} 
        >
            <span className={cls.time}>{cardProps.date}</span>
        </div>
    );
}