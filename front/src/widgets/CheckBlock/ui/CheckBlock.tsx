import { IDescriptionState } from 'enteties/DescriptionCard';
import { DescriptionCard, DescriptionCardThemes } from 'enteties/DescriptionCard/ui/DescriptionCard';
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CheckBlock.module.scss';

interface CheckBlockProps {
    className?: string;
}

export const CheckBlock: React.FC<CheckBlockProps> = (props) => {
    const { className } = props;


    const [ cards ] = useState<IDescriptionState[]>([
        {
            card: {
                icon: <p className={cls.icon}>✅</p>,
                title: 'Оплата консультаций',
                text: 'Оплата вносится только после фактического проведения сессии',
            },
            theme: DescriptionCardThemes.CLEAR,
        },
        {
            card: {
                icon: <p className={cls.icon}>✅</p>,
                title: 'Комбинированные формы оплаты',
                text: 'Текст?',

            },
            theme: DescriptionCardThemes.CLEAR,
        },
        {
            card: {
                icon: <p className={cls.icon}>✅</p>,
                title: 'Прозрачная отчетность',
                text: 'Детальная информация об активности всех сотрудников (количество проведенных сессий, дата следующей сессии, статус активности)',

            },
            theme: DescriptionCardThemes.CLEAR,
        },
        {
            card: {
                icon: <p className={cls.icon}>✅</p>,
                title: 'Контроль за списком участников',
                text: 'Вы платите только за ваших сотрудников',

            },
            theme: DescriptionCardThemes.CLEAR,
        },
    ])


    return (
        <div className={classNames(cls.checkBlock, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.content}>
                    <h2 className={cls.title}>
                            С нами классно работать
                    </h2>
                    <div className={cls.block}>
                        {
                            cards.map(({card, theme}, index)=>(
                                <DescriptionCard card={card} theme={theme} key={`checkBlockCard_${index}`} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}