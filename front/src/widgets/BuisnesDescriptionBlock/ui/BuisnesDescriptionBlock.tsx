import { DescriptionCard, IDescriptionState } from 'enteties/DescriptionCard';
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './BuisnesDescriptionBlock.module.scss';

import { ReactComponent as Icon_1  } from 'shared/assets/img/icons/descriptionCard_1.svg'
import { ReactComponent as Icon_2  } from 'shared/assets/img/icons/descriptionCard_2.svg'
import { DescriptionCardThemes } from 'enteties/DescriptionCard/ui/DescriptionCard';
import { useNavigate } from 'react-router-dom';


interface BuisnesDescriptionBlockProps {
    className?: string;
}

export const BuisnesDescriptionBlock: React.FC<BuisnesDescriptionBlockProps> = (props) => {
    const { className } = props;


    const [ cards ] = useState<IDescriptionState[]>([
        {
            card: {
                icon: <p className={cls.icon}>🧍</p>,
                title: 'По вашему запросу подбираем индивидуальный вариант сотрудничества.',
            },
            theme: DescriptionCardThemes.BORDERED_BLUE,
        },
        {
            card: {
                icon: <p className={cls.icon}>🌍</p>,
                title: 'Доступность из любой точки мира, консультирование может проводиться как очно, так и он-лайн',
            },
            theme: DescriptionCardThemes.BORDERED_BLUE,
        },
    ])

    const navigate = useNavigate()

    return (
        <div className={classNames(cls.buisnesDescriptionBlock, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.content}>
                    <h2 className={cls.title}>
                Мы помогаем повышать
                продуктивность сотрудников!
                    </h2>
                    <p className={cls.text}>
                Психоаналитическое бизнес-консультирование создаёт
                комфортную и продуктивную атмосферу в коллективе
                    </p>
                    <div className={cls.cards}>
                        {
                            cards.map(({card, theme}, index)=>(
                                <DescriptionCard className={cls.card} card={card} theme={theme} key={`buisnesCard_${index}`}/>
                            ))
                        }
                    </div>
                    <Button className={cls.btn} theme={ButtonTheme.BLUE} onClick={()=>{navigate('#Q_A')}}>
                        Остались вопросы?
                        Мы перезвоним и ответим на них!
                    </Button>
                </div>
            </div>
        </div>
    );
}