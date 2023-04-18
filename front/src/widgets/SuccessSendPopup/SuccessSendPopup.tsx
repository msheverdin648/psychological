import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SuccessSendPopup.module.scss';

interface SuccessSendPopupProps {
    className?: string;
}

export const SuccessSendPopup: React.FC<SuccessSendPopupProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.successSendPopup, {}, [className ?? '' ])}>
            <h2 className={cls.title}>Ваше сообщение отправлено.</h2>
            <p className={cls.text}>Благодарим за обращение.</p>
        </div>
    );
}