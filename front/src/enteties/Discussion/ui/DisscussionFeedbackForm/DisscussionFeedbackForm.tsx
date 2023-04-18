import { classNames } from 'shared/lib/classNames/classNames';
import cls from './DisscussionFeedbackForm.module.scss';
import { DiscussionNav } from '../DiscussionNav/DiscussionNav';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { DiscussionSlice } from 'enteties/Discussion/redux/DiscussionSlice';
import { IAppointment } from 'enteties/Discussion/models/types';
import { discussionDateApi } from 'enteties/Discussion/api/DiscussionDateApi';
import { PopupList, PopupSlice } from 'enteties/Popup';
import { FeedbackForm } from 'widgets/FeedbackForm/FeedbackForm';


interface FeedbackFormProps {
    className?: string;
}



export const DisscussionFeedbackForm: React.FC<FeedbackFormProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch()
    const discussion = useAppSelector(state => state.DiscussionReducer)

   

    const [ sendAppointment ] = discussionDateApi.useSendAppointmentMutation()


    function submitForm(data: any){
        dispatch(DiscussionSlice.actions.setDataFromForm(data))

        if(discussion.time_slot){
            const formData: IAppointment = {
                client: {
                    'name': data.name,
                    'email': data.email,
                    'phone': data.phone,
                    'experience': discussion.client.experience
                },
                time_slot: discussion.time_slot.id,
                discussion_themes: discussion.discussion_themes.map(item => item.id)    
            }
            sendAppointment(formData)
            dispatch(DiscussionSlice.actions.resetState())
            dispatch(PopupSlice.actions.openPopup(PopupList.MESSAGE))
        }

    }

    
    return (
        <div className={classNames(cls.feedbackForm, {}, [className ?? '' ])}>
            <DiscussionNav title='Как с вами связаться?'/>
            <FeedbackForm submit={submitForm} className={cls.form} />
        </div>
    );
}