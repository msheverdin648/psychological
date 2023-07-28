import { DescriptionCard, IDescriptionCard } from 'enteties/DescriptionCard';
import { DescriptionCardThemes } from 'enteties/DescriptionCard/ui/DescriptionCard';
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './RegularSessionsBlock.module.scss';
import { useNavigate } from 'react-router-dom';

interface RegularSessionsBlockProps {
    className?: string;
}




export const RegularSessionsBlock: React.FC<RegularSessionsBlockProps> = (props) => {
    const { className } = props;

    const [cards] = useState<IDescriptionCard[]>([
        {
            icon: <span className={cls.icon}>1</span>,
            text: 'Наладить гармоничные отношения с близкими людьми'
        },
        {
            icon: <span className={cls.icon}>2</span>,
            text: 'Справиться с тревогой и почувствовать спокойствие'
        },
        {
            icon: <span className={cls.icon}>3</span>,
            text: 'Принять себя и повысить свою самооценку'
        },
        {
            icon: <span className={cls.icon}>4</span>,
            text: 'Получить заряд энергии и перестать прокрастинировать'
        },
        {
            icon: <span className={cls.icon}>5</span>,
            text: 'Найти своё призвание и начать заниматься любимым делом'
        },
        {
            icon: <span className={cls.icon}>6</span>,
            text: 'Научиться говорить «Нет» и отстаивать свои границы'
        },
    ]) 

    const navigate = useNavigate()

    return (
        <div className={classNames(cls.regularSessionsBlock, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.content}>
                    <h2 className={cls.title}>
                        Регулярные сессии с психотерапевтом
                        повышают качество жизни
                    </h2>
                    <div className={cls.cards}>
                        {
                            cards.map((card, index)=>(
                                <DescriptionCard className={cls.card} card={ card } key={`regularSessionsBlockCard_${index}`} cardTheme={DescriptionCardThemes.CLEAR}/>
                            ))
                        }
                    </div>
                    <Button theme={ButtonTheme.BLUE}  onClick={()=>{navigate('/#appointment')}}>Хочу обсудить свою ситуацию</Button>
                </div>
            </div>
        </div>
    );
}