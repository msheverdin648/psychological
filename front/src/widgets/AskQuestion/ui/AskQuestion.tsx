import { classNames } from 'shared/lib/classNames/classNames';
import { QuestionForm } from 'widgets/QuestionForm';
import cls from './AskQuestion.module.scss';

import {ReactComponent as WhatsAppIcon} from 'shared/assets/img/icons/whatsApp.svg'
import {ReactComponent as TgIcon} from 'shared/assets/img/icons/tg-big.svg'
import {ReactComponent as EmailIcon} from 'shared/assets/img/icons/email.svg'
import {ReactComponent as PointMarkIcon} from 'shared/assets/img/icons/pointMark.svg'

interface AskQuestionProps {
    className?: string;
}

export const AskQuestion: React.FC<AskQuestionProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.askQuestion, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.content}>
                    <QuestionForm />
                    <div className={cls.infoBlock}>
                        <span className={cls.icon}>🔔</span>
                        <h3 className={cls.title}>Контакты</h3>
                        <p className={cls.text}>
                            Не откладывайте звонок!
                            Свяжитесь с нами — и мы Вам поможем!
                        </p>
                        <ul className={cls.socials}>
                            <li className={classNames(cls.phone, {}, [cls.social])}><WhatsAppIcon className={cls.socialIcon}/> +7 920 000 00 00</li>
                            <li className={classNames('', {}, [cls.social])}><TgIcon className={cls.socialIcon}/>@имя</li>
                            <li className={classNames('', {}, [cls.social])}><EmailIcon className={cls.socialIcon}/>info@info.com</li>
                            <li className={classNames('', {}, [cls.social])}><PointMarkIcon className={cls.socialIcon}/>г. Москва, ул. Название</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}