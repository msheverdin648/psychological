import {  TariffCard, tariffsApi } from 'enteties/Tariffs';
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


    const { data: cards } = tariffsApi.useFetchTariffsQuery('')

    const navigate = useNavigate()

    return (
        <div className={classNames(cls.tariffs, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.content}>
                    <div className={cls.cards}>
                        {
                            cards && cards.map((card)=>(
                                <TariffCard card={card} key={card.id} className={cls.card} />
                            ))
                        }
                    </div>
                    <Button theme={ButtonTheme.GREEN} onClick={()=>{navigate('/#appointment')}}>
                        Записаться на консультацию
                    </Button>
                    <span className={cls.text}><ClockIcon className={cls.icon} /> Время одной сессии – 45 минут</span>
                </div>
            </div>
        </div>
    );
}