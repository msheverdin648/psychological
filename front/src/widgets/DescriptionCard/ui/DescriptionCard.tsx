import { classNames } from 'shared/lib/classNames/classNames';
import { IDescriptionCard } from '../types';
import cls from './DescriptionCard.module.scss';



interface DescriptionCardProps {
    className?: string;
    theme?: string;
    card: IDescriptionCard;
}

export const enum DescriptionCardThemes {
    FILL='fill',
    BORDERED='bordered'
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
            <h3 className={classNames(cls.title, {}, [className ?? '', cls[theme]])}>{card.title}</h3>
            <p className={classNames(cls.text, {}, [className ?? '', cls[theme]])}>{card.text}</p>
        </div>
    );
}