import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PrivacyPolicy.module.scss';

interface PrivacyPolicyProps {
    className?: string;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = (props) => {
    const { className } = props;

    return (
        <p className={classNames(cls.privacyPolicy, {}, [className ?? '' ])}>
            © Liudmila Nikolaeva, 2023. Все права защищены
            Этот сайт защищен <span className={cls.link}>Политикой конфиденциальности</span>
        </p>
    );
}