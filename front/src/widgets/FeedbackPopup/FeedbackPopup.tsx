import { classNames } from 'shared/lib/classNames/classNames';
import cls from './FeedbackPopup.module.scss';
import { FeedbackForm } from 'widgets/FeedbackForm/FeedbackForm';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { PopupList, PopupSlice } from 'enteties/Popup';
import { useGetUrl } from 'shared/hooks/useGetUrl/useGetUrl';
import { sendForm } from 'shared/lib/handlers/sendForm';

interface FeedbackPopupProps {
    className?: string;
}

export const FeedbackPopup: React.FC<FeedbackPopupProps> = (props) => {
    const { className } = props;

    
    const dispatch = useAppDispatch()

    const { url } = useGetUrl('certificate-form')

    function formSubmitHandler(data: any){
        sendForm(data, url)
        dispatch(PopupSlice.actions.openPopup(PopupList.MESSAGE))
    }
    
    return (
        <div className={classNames(cls.feedbackPopup, {}, [className ?? '' ])}>
            <h2 className={cls.title}>Оставьте заявку и с вами свяжутся</h2>
            <FeedbackForm  submit={formSubmitHandler} />
        </div>
    );
}