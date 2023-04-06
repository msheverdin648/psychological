import { classNames } from 'shared/lib/classNames/classNames';
import { useForm } from "react-hook-form";
import cls from './FeedbackForm.module.scss';
import { DiscussionNav } from '../DiscussionNav/DiscussionNav';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { DiscussionSlice } from 'enteties/Discussion/redux/DiscussionSlice';
import { IAppointment } from 'enteties/Discussion/models/types';
import { discussionDateApi } from 'enteties/Discussion/api/DiscussionDateApi';


interface FeedbackFormProps {
    className?: string;
}



export const FeedbackForm: React.FC<FeedbackFormProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch()
    const discussion = useAppSelector(state => state.DiscussionReducer)

    const {
        handleSubmit,
        register,
        formState: {errors},
        reset
    } = useForm()

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
            reset()
            dispatch(DiscussionSlice.actions.resetState())
        }

    }

    return (
        <div className={classNames(cls.feedbackForm, {}, [className ?? '' ])}>
            <DiscussionNav title='Как с вами связаться?'/>
            <form className={cls.inputs} onSubmit={handleSubmit(submitForm)}>
                <input 
                    { 
                        ...register(
                            'name',
                            {
                                required: 'Пожалуйста введите имя'
                            }
                        
                        )
                    } 
                    placeholder='Имя'  
                    className={cls.input} 
                    // theme={InputThemes.WHITE}
                />
                {errors.name?.message && typeof errors.name?.message === 'string' && (
                    <span className={cls.error}>{errors.name?.message}</span>
                )}
                <input  
                    { 
                        ...register(
                            'email',
                            {
                                required: 'Пожалуйста введите email'
                            }
                        
                        )
                    } 
                    placeholder='Email' 
                    className={cls.input} 
                    // theme={InputThemes.WHITE}
                />
                {errors.email?.message && typeof errors.email?.message === 'string' && (
                    <span className={cls.error}>{errors.email?.message}</span>
                )}
                <input 
                    { 
                        ...register(
                            'phone',
                            {
                                required: 'Пожалуйста введите номер'
                            }
                        
                        )
                    } 
                    placeholder='Телефон' 
                    className={cls.input} 
                    // theme={InputThemes.WHITE} 
                />
                {errors.phone?.message && typeof errors.phone?.message === 'string' && (
                    <span className={cls.error}>{errors.phone?.message}</span>
                )}
                <p className={cls.privacy}>
                    Нажимая кнопку “Отправить заявку”, Вы соглашаетесь с <a href="#">
                        условиями обработки персональных данных
                    </a>
                </p>
                <Button type='submit' theme={ButtonTheme.BLUE} className={cls.button}>Отправить заявку</Button>
            </form>
        </div>
    );
}