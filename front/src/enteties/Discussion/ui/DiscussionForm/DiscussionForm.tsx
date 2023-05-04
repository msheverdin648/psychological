import { classNames } from 'shared/lib/classNames/classNames';
import cls from './DiscussionForm.module.scss';
import { ChoseDiscussionTheme } from '../ChoseDiscussionTheme/ChoseDiscussionTheme';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { DiscussionSlice } from 'enteties/Discussion/redux/DiscussionSlice';
import { ChoseExperience } from '../ChoseExperience/ChoseExperience';
import { ChoseDiscussionDate } from '../ChoseDiscussionDate/ChoseDiscussionDate';
import { DisscussionFeedbackForm } from '../DisscussionFeedbackForm/DisscussionFeedbackForm';
import { discussionThemesApi } from 'enteties/Discussion/api/DiscussionThemesApi';

interface DiscussionFormProps {
    className?: string;
}

export const DiscussionForm: React.FC<DiscussionFormProps> = (props) => {
    const { className } = props;

    const dispatch = useAppDispatch() 
    const { data: cards} = discussionThemesApi.useFetchThemesQuery('')
    const { curPage, totalPages, fixedPagesCount } = useAppSelector(state => state.DiscussionReducer)




    useEffect(
        ()=>{
            if(cards){
                dispatch(DiscussionSlice.actions.setPagesCount(cards.length)) 
            }
        },[cards?.length]
    )


    return (
        <div className={classNames(cls.discussionForm, {}, [className ?? '' ])}>
            {
                curPage <= totalPages - fixedPagesCount
                    ?
                    <ChoseDiscussionTheme className={cls.form} />
                    :
                    curPage === totalPages - 2
                        ?
                        <ChoseDiscussionDate className={cls.form} />
                        :
                        curPage === totalPages - 1
                            ?
                            <ChoseExperience className={cls.form}/>
                            :
                            curPage === totalPages
                                ?
                                <DisscussionFeedbackForm className={cls.form}/>
                                :
                                null
            }

        </div>
    );
}