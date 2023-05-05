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
   
    function clickHandler(){
        dispatch(DiscussionSlice.actions.setDiscussionTheme(card))
        dispatch(DiscussionSlice.actions.increaseCurPage())
    }
    
    return (
        <span 
            className={classNames(cls.discussionTheme, {[cls.active]: active}, [className ?? '' ])} 
            onClick={()=>clickHandler()}>
            { card.name }
        </span>
    );
}