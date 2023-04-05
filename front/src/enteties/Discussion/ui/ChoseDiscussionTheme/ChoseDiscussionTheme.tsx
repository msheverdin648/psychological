import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ChoseDiscussionTheme.module.scss';
import { DiscussionNav } from '../DiscussionNav/DiscussionNav';
import { DiscussionTheme } from '../DiscussionTheme/DiscussionTheme';
import { useAppSelector } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { discussionThemesApi } from 'enteties/Discussion/api/DiscussionThemesApi';

interface ChoseDiscussionThemeProps {
    className?: string;
}



export const ChoseDiscussionTheme: React.FC<ChoseDiscussionThemeProps> = (props) => {
    const { className } = props;


    const { discussion_themes } = useAppSelector(state => state.DiscussionReducer)
    // const {cards}  = useAppSelector(state => state.DiscussionThemesReducer)
    const {data: cards}  = discussionThemesApi.useFetchAvailableThemesQuery('')
    const { curPage }  = useAppSelector(state => state.DiscussionReducer)

    return (
        <div className={classNames(cls.choseDiscussionTheme, {}, [className ?? '' ])}>
            <DiscussionNav title='Что бы вы хотели обсудить?' subTitle='Запишитесь сейчас' />
            <div className={cls.cards}>
                {
                    cards?.slice((curPage-1)*10, (curPage-1)*10+10) .map((card, index)=>(
                        <DiscussionTheme 
                            card={card} 
                            key={`DiscussionThemes_${index}`} 
                            active = {Boolean(discussion_themes.find((item)=>item.id === card.id)) }
                        />
                    ))
                }
            </div>
        </div>
    );
}