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
            <Banner photo={banner} className={cls.banner}>
                <ul className={cls.list}>
                    <li className={cls.listItem}>1. Заполните обратную форму на сайте, выбрав удобную для вас дату и время. </li>
                    <li className={cls.listItem}>2. После получения письма, произведите оплату по реквизитам. </li>
                    <li className={cls.listItem}>Консультация длится 45 минут, в течение которых вы познакомитесь с психотерапевтом, обсудите свои запросы и совместно с ним изучите проблему более глубоко.</li>
                    <li className={cls.listItem}>💡<br/>Вы получите ссылку на онлайн-конференцию к назначенному времени</li>
                </ul>
            </Banner>
        </div>
    );
}