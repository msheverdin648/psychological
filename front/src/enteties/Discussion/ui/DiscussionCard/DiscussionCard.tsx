import { IDisscussionCard } from 'enteties/Discussion/models/types';
import { DiscussionSlice } from 'enteties/Discussion/redux/DisscussionSlice';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './DiscussionCard.module.scss';

interface DiscussionCardProps extends IDisscussionCard {
    className?: string;
    active?: boolean;
}

export const DiscussionCard: React.FC<DiscussionCardProps> = (props) => {
    const { 
        className,
        text,
        active=false
    } = props;

    const dispatch = useAppDispatch()
   
    
    return (
        <span 
            className={classNames(cls.discussionCard, {[cls.active]: active}, [className ?? '' ])} 
            onClick={()=>dispatch(DiscussionSlice.actions.toggleCard({text: text}))}>
            { text }
        </span>
    );
}