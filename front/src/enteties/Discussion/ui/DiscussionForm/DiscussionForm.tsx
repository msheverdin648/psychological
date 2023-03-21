import { useState } from 'react';
import { useAppSelector } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { DiscussionCard } from '../DiscussionCard/DiscussionCard';
import { DiscussionNav } from '../DiscussionNav/DiscussionNav';
import cls from './DiscussionForm.module.scss';

interface DiscussionFormProps {
    className?: string;
}

export const DiscussionForm: React.FC<DiscussionFormProps> = (props) => {
    const { className } = props;

    const [cards, setCards] = useState([
        'Поиск себя', 'Карьерное развитие',
        'Романтические и сексуальные отношения', 'Трудности в отношениях',
        'Утраты, потеря близкого человека', 'Депрессия', 'Хроническая усталость', 
        'Чувство тревоги', 'Проблемы со сном', 'Пищевое поведение', 'Профессиональное самоопределение'
    ])


    const { cards: discussionsCards } = useAppSelector(state => state.DiscussionReducer)

    return (
        <div className={classNames(cls.discussionForm, {}, [className ?? '' ])}>
            <h2 className={cls.title}>Что бы вы хотели обсудить?</h2>
            <h3 className={cls.subTitle}>Запишитесь сейчас</h3>
            <DiscussionNav />
            <div className={cls.cards}>
                {
                    cards.map((text, index)=>(
                        <DiscussionCard text={text} key={`discussionCard_${index}`} active = {Boolean(discussionsCards.find((card)=>card.text===text)) } />
                    ))
                }
            </div>
        </div>
    );
}