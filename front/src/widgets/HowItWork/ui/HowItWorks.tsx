import { HowItWorksCard, HowItWorksCardThemes, HowItWorksState } from 'enteties/HowItWorkCard';
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './HowItWorks.module.scss';

interface HowItWorksProps {
    className?: string;
}




export const HowItWorks: React.FC<HowItWorksProps> = (props) => {
    const { className } = props;

    const [cards] = useState<HowItWorksState[]>([
        {
            card: {
                id: 1,
                icon: '👤',
                text: 'Сотрудник создает личный кабинет на сайте',
            },
            theme: HowItWorksCardThemes.TEXT_BOTTOM,
        },
        {
            card: {
                id: 2,
                icon: '👛',
                text: 'Сотрудник создает личный кабинет на сайте',
            },
            theme: HowItWorksCardThemes.TEXT_TOP,
        },
        {
            card: {
                id: 3,
                icon: '🕔',
                text: 'Бронирует удобную дату и время',
            },
            theme: HowItWorksCardThemes.TEXT_BOTTOM,
        },
        {
            card: {
                id: 4,
                icon: '☎️',
                text: 'В назначенное время сотрудник звонит психотерапевту',
            },
            theme: HowItWorksCardThemes.TEXT_TOP,
        },
        {
            card: {
                id: 5,
                icon: '⭐',
                text: 'Ждем ваш фидбек, после первого сеанса!',
            },
            theme: HowItWorksCardThemes.TEXT_BOTTOM,
        },
    ])

    return (
        <div className={classNames(cls.howItWorks, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.content}>
                    <h2 className={cls.title}>Как это работает</h2>
                    <div className={cls.cards}>
                        {
                            cards.map(({card, theme})=>(
                                <HowItWorksCard card={card} theme={theme} className={cls.card} key={`HowItWorksCard_${card.id}`} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}