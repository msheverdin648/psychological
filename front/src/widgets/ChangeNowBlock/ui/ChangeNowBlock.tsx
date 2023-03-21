import { IDescriptionState } from 'enteties/DescriptionCard';
import { DescriptionCard, DescriptionCardThemes } from 'enteties/DescriptionCard/ui/DescriptionCard';
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ChangeNowBlock.module.scss';

interface ChangeNowBlockProps {
    className?: string;
}

export const ChangeNowBlock: React.FC<ChangeNowBlockProps> = (props) => {
    const { className } = props;

    const [ cards ] = useState<IDescriptionState[]>([
        {
            card: {
                icon: <p className={cls.icon}>🛋</p>,
                title: 'Запишитесь на первую сессию',
            },
            theme: DescriptionCardThemes.FILL_WITHOUT_ICON,
        },
        {
            card: {
                icon: <p className={cls.icon}>🧠</p>,
                title: 'Проработайте ваши конфликты',
            },
            theme: DescriptionCardThemes.FILL_WITHOUT_ICON,
        },
        {
            card: {
                icon: <p className={cls.icon}>⛅</p>,
                title: 'Начните замечать, как меняется ваше настоящее',
            },
            theme: DescriptionCardThemes.FILL_WITHOUT_ICON,
        },
    ])

    return (
        <div className={classNames(cls.changeNowBlock, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.content}>
                    <h2 className={cls.title}>
                        Меняйте уже сейчас ✨
                    </h2>
                    <div className={cls.cards}>
                        {
                            cards.map(({card, theme}, index)=>(
                                <DescriptionCard card={card} theme={theme} className={cls.card} key={`changeNowBlockCard_${index}`} />
                            ))
                        }
                    </div>
                    <Button theme={ButtonTheme.BLUE_BORDERED} >
                        Остались вопросы?
                        Мы перезвоним и ответим на них!
                    </Button>
                </div>
            </div>
        </div>
    );
}