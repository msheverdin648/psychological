import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ICircleCard, iconPosition } from 'widgets/CanHelpBlock/models/types';
import { CircleCard } from '../CircleCard/CircleCard';
import cls from './CanHelpBlock.module.scss';

interface CanHelpBlockProps {
    className?: string;
}

export const CanHelpBlock: React.FC<CanHelpBlockProps> = (props) => {
    const { className } = props;


    const [firstCircleCards] = useState<ICircleCard[]>([
        {
            id: 1,
            icon: "🪜",
            text: 'Карьерное развитие',
            icon_position: iconPosition.LEFT
        },
        {
            id: 2,
            icon: "⌛",
            text: 'Прокрастинация',
            icon_position: iconPosition.LEFT
        },
        {
            id: 3,
            icon: "😟",
            text: 'Тревоги, панические атаки',
            icon_position: iconPosition.LEFT
        },
        {
            id: 4,
            icon: "😑",
            text: 'Выгорание',
            icon_position: iconPosition.LEFT
        },
        {
            id: 5,
            icon: "⚠️",
            text: 'Трудности в отношениях',
            icon_position: iconPosition.LEFT
        },
        {
            id: 6,
            icon: "🥺",
            text: 'Неуверенность в себе',
            icon_position: iconPosition.RIGHT
        },
    ])

    const [scondCircleCards] = useState<ICircleCard[]>([
        {
            id: 1,
            icon: "⭐",
            text: 'Собственная мотивация',
            icon_position: iconPosition.RIGHT
        },
        {
            id: 2,
            icon: "😞",
            text: 'Депрессия',
            icon_position: iconPosition.RIGHT
        },
        {
            id: 3,
            icon: "❗",
            text: 'Проблема эмпатии',
            icon_position: iconPosition.RIGHT
        },
        {
            id: 4,
            icon: "🔎",
            text: 'Поиск себя',
            icon_position: iconPosition.RIGHT
        },
        {
            id: 5,
            icon: "😴",
            text: 'Хроническая усталость',
            icon_position: iconPosition.RIGHT
        },
    ])

    return (
        <div className={classNames(cls.canHelpBlock, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.content}>

                    <h2 className={cls.title}>С чем можем помочь... </h2>
                    <div className={cls.circles}>
                        <div className={classNames(cls.circle, {}, [cls.firstCircle])}>
                            {
                                firstCircleCards.map((card)=>(
                                    <CircleCard className={cls.card} card={card} key={`firstCircleCard_${card.id}`} />
                                ))
                            }
                            <span className={classNames(cls.card, {}, [cls.btn])}>
                                <Button theme={ButtonTheme.BLUE}>Обсудить детали</Button>
                            </span>
                        </div>
                        
                        <div className={classNames(cls.circle, {}, [cls.secondCircle])}>
                            {
                                scondCircleCards.map((card)=>(
                                    <CircleCard className={cls.card} card={card} key={`secondCircleCard_${card.id}`} />
                                ))
                            }
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}