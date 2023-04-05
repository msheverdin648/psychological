import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ChoseExperience.module.scss';
import { DiscussionNav } from '../DiscussionNav/DiscussionNav';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { DiscussionSlice } from 'enteties/Discussion/redux/DiscussionSlice';

interface ChoseExperienceProps {
    className?: string;
}

export const ChoseExperience: React.FC<ChoseExperienceProps> = (props) => {
    const { className } = props;

    const { client } = useAppSelector(state => state.DiscussionReducer) 
    const dispatch = useAppDispatch()

    return (
        <div className={classNames(cls.choseExperience, {}, [className ?? '' ])}>
            <DiscussionNav title='Был ли у вас ранее опыт терапии?'/>
            <div className={cls.buttons}> 
                <Button 
                    theme={ButtonTheme.BORDERED} 
                    className={classNames(cls.button, {[cls.active]: client.experience }, [])}
                    onClick={()=>dispatch(DiscussionSlice.actions.setExperience(true))}
                >
                    Да
                </Button>
                <Button 
                    theme={ButtonTheme.BORDERED} 
                    className={classNames(cls.button, {[cls.active]: !client.experience }, [])}
                    onClick={()=>dispatch(DiscussionSlice.actions.setExperience(false))}
                >
                    Нет
                </Button>
            </div>
        </div>
    );
}