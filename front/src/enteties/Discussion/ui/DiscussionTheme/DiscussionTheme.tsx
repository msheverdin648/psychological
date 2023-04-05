import { IDiscussionThemes } from 'enteties/Discussion/models/types';
import { DiscussionSlice } from 'enteties/Discussion/redux/DiscussionSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './DiscussionTheme.module.scss';

interface DiscussionThemesProps {
    className?: string;
    active?: boolean;
    card: IDiscussionThemes;
}

export const DiscussionTheme: React.FC<DiscussionThemesProps> = (props) => {
    const { 
        className,
        card,
        active=false
    } = props;

    const dispatch = useAppDispatch()
   
    
    return (
        <span 
            className={classNames(cls.discussionTheme, {[cls.active]: active}, [className ?? '' ])} 
            onClick={()=>dispatch(DiscussionSlice.actions.toggleCard(card))}>
            { card.name }
        </span>
    );
}