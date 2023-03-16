import { classNames } from 'shared/lib/classNames/classNames';
import { IHowItWorksCard } from '../models/types';
import cls from './HowItWorksCard.module.scss';

interface HowItWorksCardProps {
    className?: string;
    theme?: string; 
    card: IHowItWorksCard;
}

export const enum HowItWorksCardThemes {
    TEXT_TOP = 'text_top',
    TEXT_BOTTOM = 'text_bottom'
}

export const HowItWorksCard: React.FC<HowItWorksCardProps> = (props) => {
    const { 
        className, 
        theme=HowItWorksCardThemes.TEXT_BOTTOM,
        card
    } = props;

    return (
        <div className={classNames(cls.howItWorksCard, {}, [className ?? '' ])}>
            {
                theme === 'text_top'
                    ?
                    <>
                        <p className={classNames(cls.text, {[cls.hidden]:false}, [])}>{card.text}</p>
                        <span className={cls.icon}>{card.icon}</span>
                        <p className={classNames(cls.text, {[cls.hidden]:true}, [])}>{card.text}</p>

                    </>
                    :
                    <>
                        <p className={classNames(cls.text, {[cls.hidden]:true}, [])}>{card.text}</p>
                        <span className={cls.icon}>{card.icon}</span>
                        <p className={classNames(cls.text, {[cls.hidden]:false}, [])}>{card.text}</p> 
                    </>
            }
        </div>
    );
}