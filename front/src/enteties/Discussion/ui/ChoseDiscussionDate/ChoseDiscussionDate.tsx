import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ChoseDiscussionDate.module.scss';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { DiscussionSlice } from 'enteties/Discussion/redux/DiscussionSlice';
import { discussionDateApi } from 'enteties/Discussion/api/DiscussionDateApi';
import { TimeSlotCard } from '../TimeSlotCard/TimeSlotCard';
import { DayCard } from '../DayCard/DayCard';

interface ChoseDiscussionDateProps {
    className?: string;
}

export const ChoseDiscussionDate: React.FC<ChoseDiscussionDateProps> = (props) => {
    const { className } = props;

    const { data: available_slots } = discussionDateApi.useFetchAvailableDatesQuery('')
    const { data: days } = discussionDateApi.useFetchDaysQuery('')


    const { time_slot } = useAppSelector(state => state.DiscussionReducer)
    const dispatch = useAppDispatch()
    return (
        <div className={classNames(cls.choseDiscussionDate, {}, [className ?? '' ])}>
            <h2 className={cls.title}>Когда вам удобно?</h2>
            <h3 className={cls.subTitle}><span style={{opacity: 0}}>Empty</span></h3> 
            <div className={cls.cards}>
                {

                    days?.filter(({time_slots})=> time_slots.length > 0 )
                        .map((card, index) => (
                            <div className={cls.row} key={`dayCard_${card.id}`}>
                                <DayCard card={card} />
                                {
                                    card.time_slots.map((card)=>(
                                        <TimeSlotCard card={card} key={`timeSlotCard_${card.id}`} />
                                    ))
                                }
                            </div>
                        ))
                             
                }
            </div>
        </div>
    );
}