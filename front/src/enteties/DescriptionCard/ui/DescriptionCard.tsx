import { classNames } from 'shared/lib/classNames/classNames';
import { IDescriptionCard } from '../models/types';
import cls from './DescriptionCard.module.scss';



interface DescriptionCardProps {
    className?: string;
    theme?: string;
    card: IDescriptionCard;
}

export const enum DescriptionCardThemes {
    FILL='fill',
    CLEAR='clear',
    BORDERED='bordered',
    BORDERED_BLUE='bordered_blue'
}

export const DescriptionCard: React.FC<DescriptionCardProps> = (props) => {
    const { 
        className, 
        theme = DescriptionCardThemes.FILL,
        card
    } = props;

    return (
        <div className={classNames(cls.descriptionCard, {}, [className ?? '', cls[theme] ])}>
            <div className={classNames(cls.icon, {}, [className ?? '', cls[theme]])}>
                {card.icon}
            </div>
            {
                card.title && <h3 className={classNames(cls.title, {}, [className ?? '', cls[theme]])}>{card.title}</h3>
            }
            {
                card.text && <p className={classNames(cls.text, {}, [className ?? '', cls[theme]])}>{card.text}</p>
            }
        </div>
    );
}