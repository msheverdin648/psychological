import { classNames } from 'shared/lib/classNames/classNames';
import { ICircleCard } from 'widgets/CanHelpBlock/models/types';
import cls from './CircleCard.module.scss';

interface CircleCardProps {
    className?: string;
    card: ICircleCard;
}

export const CircleCard: React.FC<CircleCardProps> = (props) => {
    const { 
        className,
        card
    } = props;

    return (
        <span className={classNames(cls.card, {}, [className ?? '' ])}>
            <span className={classNames(cls.icon, {}, [cls[card.icon_position]])}>{card.icon}</span>
            {card.text}
        </span>
    );
}