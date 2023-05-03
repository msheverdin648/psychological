import { classNames } from 'shared/lib/classNames/classNames';
import cls from './TimeSlotCard.module.scss';
import { ITimeSlot } from 'enteties/Discussion/models/types';
import { DiscussionSlice } from 'enteties/Discussion/redux/DiscussionSlice';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useEffect, useState } from 'react';

interface TimeSlotCardProps {
    className?: string;
    card: ITimeSlot;
    isActive?: boolean;
}

export const TimeSlotCard: React.FC<TimeSlotCardProps> = (props) => {
    const { 
        className, 
        card, 
        isActive=false 
    } = props;
    const [cardProps] = useState(
        {
            id: card.id,
            date: new Date(card.start_time).toLocaleString('ru-RU', {
                day: 'numeric',
                month: 'short',
                weekday: 'short',
            }),
            time: new Date(card.start_time).toLocaleTimeString('ru-RU', {
                hour: 'numeric',
                minute: 'numeric',
            }),
        }
    )
    const { time_slot } = useAppSelector(state => state.DiscussionReducer)

    const dispatch = useAppDispatch()

    return (
        <div 
            className={classNames(cls.card, {[cls.active]: cardProps.id === time_slot?.id}, [])} 
            
            onClick={()=>dispatch(DiscussionSlice.actions.setTimeSlot(cardProps))}
        >
            <span className={cls.date}>{cardProps.date}</span>
            <span className={cls.time}>{cardProps.time}</span>
        </div>
    );
}