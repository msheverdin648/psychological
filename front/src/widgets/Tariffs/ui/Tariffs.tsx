import { ITariff, TariffCard } from 'enteties/TariffCard';
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Tariffs.module.scss';
import { ReactComponent as ClockIcon } from 'shared/assets/img/icons/clock.svg';
import { useNavigate } from 'react-router-dom';

interface TariffsProps {
    className?: string;
}

export const Tariffs: React.FC<TariffsProps> = (props) => {
    const { className } = props;


    const [ cards ] = useState<ITariff[]>([
        {
            id: 1,
            prev_price: 6000,
            title: 'Стартовый тариф',
        },
        {
            id: 2,
            prev_price: 10000,
            title: 'Оптимальный тариф',
            discount: 5,
            info: '2 375 ₽ за сеанс'
        },
        {
            id: 3,
            prev_price: 12000,
            title: 'Название тариф',
            discount: 7,
            info: '2 375 ₽ за сеанс'
        },
        {
            id: 4,
            prev_price: 15000,
            title: 'Название тариф',
            discount: 10,
            info: '2 375 ₽ за сеанс'
        },
    ])

    const navigate = useNavigate()

    return (
        <div className={classNames(cls.tariffs, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.content}>
                    <div className={cls.cards}>
                        {
                            cards.map((card)=>(
                                <TariffCard card={card} key={card.id} className={cls.card} />
                            ))
                        }
                    </div>
                    <Button theme={ButtonTheme.GREEN} onClick={()=>{navigate('/psychotherapy#appointment')}}>
                        Записаться на консультацию
                    </Button>
                    <span className={cls.text}><ClockIcon className={cls.icon} /> Время одной сессии – 45 минут</span>
                </div>
            </div>
        </div>
    );
}