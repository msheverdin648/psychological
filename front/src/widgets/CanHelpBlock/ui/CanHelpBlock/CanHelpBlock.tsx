import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ICircleCard, iconPosition } from 'widgets/CanHelpBlock/models/types';
import { CircleCard } from '../CircleCard/CircleCard';
import cls from './CanHelpBlock.module.scss';
import { useNavigate } from 'react-router-dom';

interface CanHelpBlockProps {
    className?: string;
    firstCircleCards?: ICircleCard[];
    secondCircleCards?: ICircleCard[];
}

export const CanHelpBlock: React.FC<CanHelpBlockProps> = (props) => {
    const { 
        className,
        firstCircleCards = [
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
        ],
        secondCircleCards = [
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
        ]
    } = props;


    const navigate = useNavigate()

    return (
        <div className={classNames(cls.canHelpBlock, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.content}>

                    <h2 className={cls.title}>Чем можем <span className={'colored-text'}>помочь...</span> </h2>
                    <div className={cls.circles}>
                        <div className={classNames(cls.circle, {}, [cls.firstCircle])}>
                            {
                                firstCircleCards.map((card)=>(
                                    <CircleCard className={cls.card} card={card} key={`firstCircleCard_${card.id}`} />
                                ))
                            }
                            <span className={classNames(cls.card, {}, [cls.btn])}>
                                <Button theme={ButtonTheme.BLUE}  onClick={()=>{navigate('/#appointment')}}>Обсудить детали</Button>
                            </span>
                        </div>
                        
                        <div className={classNames(cls.circle, {}, [cls.secondCircle])}>
                            {
                                secondCircleCards.map((card)=>(
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