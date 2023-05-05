import { classNames } from 'shared/lib/classNames/classNames';
import { ITariff } from '../models/types';
import cls from './TariffCard.module.scss';

interface TariffCardProps {
    className?: string;
    card: ITariff;
}

export const TariffCard: React.FC<TariffCardProps> = (props) => {
    const { 
        className,
        card
    } = props;

    return (
        <div className={classNames(cls.tariffCard, {}, [className ?? '' ])}>
            {
                card.discount && <span className={cls.discount}>-{card.discount}%</span>
            }
            <h3 className={cls.title}>{card.title}</h3>
            {
                card.discount ?
                    <>
                        <span className={cls.crossed}>{card.prev_price} ₽</span>
                        <span className={cls.price}>{card.prev_price - (card.discount * card.prev_price / 100)} ₽</span>
                    </>
                    :
                    <>
                        <span className={cls.crossed}></span>
                        <span className={cls.price}>{card.prev_price} ₽</span>
                    </>
            }
            {
                card.info && <span className={cls.info}>{card.info}</span> 
            }
            <span className={cls.info}>{card.sessions} 
                {
                    card.sessions === 1
                        ?
                        ' сессия'
                        :
                        card.sessions > 1 && card.sessions < 5
                            ?
                            ' сессии'
                            :
                            ' сессий'
                }
            </span> 
        </div>
    );
}