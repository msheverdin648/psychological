import { classNames } from 'shared/lib/classNames/classNames';
import { Banner } from 'widgets/Banner';
import cls from './AboutConsultationBlock.module.scss';
import banner from 'shared/assets/img/banner-3.jpg'


interface AboutConsultationBlockProps {
    className?: string;
}

export const AboutConsultationBlock: React.FC<AboutConsultationBlockProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.aboutConsultationBlock, {}, [className ?? '' ])}>
            <h2 className={cls.title}>Как проходит консультация 💬</h2>
            <Banner photo={banner}>
                <ul className={cls.list}>
                    <li className={cls.listItem}>1. Регистрируетесь в личном кабинете</li>
                    <li className={cls.listItem}>2. Оплачиваете сессию, выбираете специалиста, удобную дату и время, ожидаете звонка.</li>
                    <li className={cls.listItem}>Консультация длится 50 минут за которые вы познакомитесь с психотерапевтом, обсудите свой запрос и совместно с специалистом изучите проблему глубже.</li>
                    <li className={cls.listItem}>💡<br/>Вы можете прийти парой на консультацию, для этого свяжитесь с консультантом и он расскажет более детально.</li>
                </ul>
            </Banner>
        </div>
    );
}