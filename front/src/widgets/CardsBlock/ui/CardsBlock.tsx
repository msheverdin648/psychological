import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CardsBlock.module.scss';

import { ReactComponent as Icon_1  } from 'shared/assets/img/icons/descriptionCard_1.svg'
import { ReactComponent as Icon_2  } from 'shared/assets/img/icons/descriptionCard_2.svg'
import { ReactComponent as Icon_3  } from 'shared/assets/img/icons/descriptionCard_3.svg'
import { ReactComponent as Icon_4  } from 'shared/assets/img/icons/descriptionCard_4.svg'
import { ReactComponent as Icon_5  } from 'shared/assets/img/icons/descriptionCard_5.svg'
import { ReactComponent as Icon_6  } from 'shared/assets/img/icons/descriptionCard_6.svg'
import { ReactComponent as Icon_7  } from 'shared/assets/img/icons/descriptionCard_7.svg'
import { DescriptionCard, DescriptionCardThemes } from 'enteties/DescriptionCard/ui/DescriptionCard';
import { IDescriptionState } from 'enteties/DescriptionCard';


interface CardsBlockProps {
    className?: string;
}

export const CardsBlock: React.FC<CardsBlockProps> = (props) => {
    const { className } = props;

    const [ cards ] = useState<IDescriptionState[]>([
        {
            card: {
                icon: <Icon_1 />,
                text: 'Он свободно создает продукты, гордясь своим вкладом (или результатом).',
                title: 'Сотрудник, получающий поддержку, более эффективен.',
            },
            cardTheme: DescriptionCardThemes.FILL,
            iconTheme: DescriptionCardThemes.BORDERED,
        },
        {
            card: {
                icon: <Icon_2 />,
                text: 'Эмоциональное состояние сотрудников улучшается.',
                title: 'Сокращается уровень конфликтов внутри команды.',
            },
            cardTheme: DescriptionCardThemes.CLEAR,
            iconTheme: DescriptionCardThemes.BORDERED,
            
        },
        {
            card: {
                icon: <Icon_3 />,
                text: 'Они не боятся говорить о своих желаниях и карьерном росте.',
                title: 'Такие сотрудники увольняются на 45% реже.',
            },
            cardTheme: DescriptionCardThemes.FILL,
            iconTheme: DescriptionCardThemes.BORDERED,

        },
        {
            card: {
                icon: <Icon_4 />,
                text: 'Наши психологи имеют полный нейтралитет.',
                title: 'Всё абсолютно конфиденциально!',
            },
            cardTheme: DescriptionCardThemes.CLEAR,
            iconTheme: DescriptionCardThemes.BORDERED,

        },
        {
            card: {
                icon: <Icon_5 />,
                text: 'Срок адаптации сотрудника в коллективе происходит на 40% быстрее.',
                title: 'Сокращается срок адаптации нового сотрудника.',
            },
            cardTheme: DescriptionCardThemes.FILL,
            iconTheme: DescriptionCardThemes.BORDERED,

        },
        {
            card: {
                icon: <Icon_6 />,
                text: 'Чувство тревоги у работников снижается на 50%.',
                title: 'Снижается чувство тревоги и стресса.',
            },
            cardTheme: DescriptionCardThemes.CLEAR,
            iconTheme: DescriptionCardThemes.BORDERED,

        },
        {
            card: {
                icon: <Icon_7 />,
                text: 'Это не делит офис на 2 лагеря и сохраняет личную информацию.',
                title: 'Никто из сотрудников не знает, кто посещает платформу.',
            },
            cardTheme: DescriptionCardThemes.FILL,
            iconTheme: DescriptionCardThemes.BORDERED,

        },
    ])

    return (
        <div className={classNames(cls.cardsBlock, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.content}>
                    <h2 className={cls.title}>
                        Почему нужно <span className='colored-text' >работать с нами</span> ✨
                    </h2>
                    <div className={cls.block}>
                        {
                            cards.map(({card, cardTheme, iconTheme}, index)=>(
                                <DescriptionCard 
                                    className={cls.card} 
                                    card={card} 
                                    cardTheme={cardTheme} 
                                    iconTheme={iconTheme} 
                                    key={`descriptionCard_${index}`} 
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}