import { classNames } from 'shared/lib/classNames/classNames';
import { AskQuestion } from 'widgets/AskQuestion';
import { CanHelpBlock } from 'widgets/CanHelpBlock';
import cls from './PsychotherapyPage.module.scss';
import banner from 'shared/assets/img/banner-2.jpg'
import { Banner } from 'widgets/Banner';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { AboutConsultationBlock } from 'widgets/AboutConsultationBlock';
import { RegularSessionsBlock } from 'widgets/RegularSessionsBlock';
import { ChangeNowBlock } from 'widgets/ChangeNowBlock';
import { ServicesBlock } from 'widgets/ServicesBlock';
import { Discussion } from 'enteties/Discussion';
import { iconPosition } from 'widgets/CanHelpBlock/models/types';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { PopupList, PopupSlice } from 'enteties/Popup';

interface PsychotherapyPageProps {
    className?: string;
}

const PsychotherapyPage: React.FC<PsychotherapyPageProps> = (props) => {
    const { className } = props;

    const firstCircleCards = [
        {
            id: 1,
            icon: "💧",
            text: 'Травмы и утраты',
            icon_position: iconPosition.LEFT
        },
        {
            id: 2,
            icon: "😟",
            text: 'Чувство одиночества',
            icon_position: iconPosition.LEFT
        },
        {
            id: 3,
            icon: "😞",
            text: 'Депрессия и тревожность',
            icon_position: iconPosition.LEFT
        },
        {
            id: 4,
            icon: "🙏",
            text: 'Поддержка и помощь',
            icon_position: iconPosition.LEFT
        },
        {
            id: 5,
            icon: "👨‍💼",
            text: 'Проблемы на работе',
            icon_position: iconPosition.LEFT
        },
        {
            id: 6,
            icon: "🍔",
            text: 'Пищевое поведение',
            icon_position: iconPosition.RIGHT
        },
    ]

    const secondCircleCards = [
        {
            id: 1,
            icon: "👫",
            text: 'Трудности в отношениях',
            icon_position: iconPosition.RIGHT
        },
        {
            id: 2,
            icon: "💔",
            text: 'Сексуальные и романтические отношения',
            icon_position: iconPosition.RIGHT
        },
        {
            id: 3,
            icon: "👨‍👩‍👦‍👦",
            text: 'Отношения с родителями',
            icon_position: iconPosition.RIGHT
        },
        {
            id: 4,
            icon: "🧒",
            text: 'Общение с детьми',
            icon_position: iconPosition.RIGHT
        },
        {
            id: 5,
            icon: "🧠",
            text: 'Психосоматика',
            icon_position: iconPosition.RIGHT
        },
    ]

    const dispatch = useAppDispatch()

    return (
        <div className={classNames(cls.psychotherapyPage, {}, [className ?? ''])}>
            <CanHelpBlock firstCircleCards={firstCircleCards} secondCircleCards={secondCircleCards}/>
            <Discussion />
            <ServicesBlock />
            <ChangeNowBlock />
            <AboutConsultationBlock />
            <RegularSessionsBlock />
            <Banner photo={banner} color={'rgba(66, 136, 189, 0.85)'} id={'certificates'}>
                <h2 className={cls.title}>
                    Дарите заботу <br /> близким
                </h2>
                <span className={cls.icon}>🎁</span>
                <h3 className={cls.subtitle}>Подарочный сертификат</h3>
                <p className={cls.text}>Переписка или видеоконсультация вы определите сами </p>
                <Button 
                    theme={ButtonTheme.GREEN} 
                    className={cls.button} 
                    onClick={()=>dispatch(PopupSlice.actions.openPopup(PopupList.FEEDBACK))}
                >
                    Заказать сертификат
                </Button>
            </Banner>
            <AskQuestion />
        </div>

    );
}

export default PsychotherapyPage;