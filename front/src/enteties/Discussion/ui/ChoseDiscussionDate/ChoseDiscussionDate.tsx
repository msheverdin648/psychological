import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ChoseDiscussionDate.module.scss';
import { DiscussionNav } from '../DiscussionNav/DiscussionNav';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { DiscussionSlice } from 'enteties/Discussion/redux/DiscussionSlice';
import { discussionDateApi } from 'enteties/Discussion/api/DiscussionDateApi';

interface ChoseDiscussionDateProps {
    className?: string;
}

export const ChoseDiscussionDate: React.FC<ChoseDiscussionDateProps> = (props) => {
    const { className } = props;

    const { data } = discussionDateApi.useFetchAvailableDatesQuery('')
    const { time_slot } = useAppSelector(state => state.DiscussionReducer)
    const dispatch = useAppDispatch()


    return (
        <div className={classNames(cls.choseDiscussionDate, {}, [className ?? '' ])}>
            <DiscussionNav title='Когда вам удобно?'/>
            <div className={cls.cards}>
                {
                    data?.map((item) => ({
                        id: item.id,
                        date: new Date(item.start_time).toLocaleString('ru-RU', {
                            day: 'numeric',
                            month: 'short',
                            weekday: 'short',
                        }),
                        time: new Date(item.start_time).toLocaleTimeString('ru-RU', {
                            hour: 'numeric',
                            minute: 'numeric',
                        }),
                    })).map((card, index) => (
                        <div 
                            className={classNames(cls.card, {[cls.active]: card.id === time_slot?.id}, [])} 
                            key={`choseDisscussionDateCard_${card.id}`}
                            onClick={()=>dispatch(DiscussionSlice.actions.setTimeSlot(card))}
                        >
                            <span className={cls.date}>{card.date}</span>
                            <span className={cls.time}>{card.time}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}