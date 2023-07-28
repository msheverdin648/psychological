import { classNames } from 'shared/lib/classNames/classNames';
import { IDescriptionCard } from '../models/types';
import cls from './DescriptionCard.module.scss';



interface DescriptionCardProps {
    className?: string;
    cardTheme?: string;
    iconTheme?: string;
    card: IDescriptionCard;
}

export const enum DescriptionCardThemes {
    FILL='fill',
    CLEAR='clear',
    BORDERED='bordered',
    BORDERED_BLUE='bordered_blue',
    FILL_WITHOUT_ICON='fill_without_icon'
}

export const DescriptionCard: React.FC<DescriptionCardProps> = (props) => {
    const { 
        className, 
        cardTheme = DescriptionCardThemes.FILL,
        iconTheme = cardTheme,
        card
    } = props;

    return (
        <div className={classNames(cls.descriptionCard, {}, [className ?? '', cls[cardTheme] ])}>
            <div className={classNames(cls.icon, {}, [className ?? '', cls[iconTheme]])}>
                {card.icon}
            </div>
            {
                card.title && <h3 className={classNames(cls.title, {}, [className ?? '', cls[cardTheme]])}>{card.title}</h3>
            }
            {
                card.text && <p className={classNames(cls.text, {}, [className ?? '', cls[cardTheme]])}>{card.text}</p>
            }
        </div>
    );
}