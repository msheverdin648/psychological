import { classNames } from 'shared/lib/classNames/classNames';
import cls from './DiscussionNav.module.scss';
import { ReactComponent as Arrow } from 'shared/assets/img/icons/arrow-right.svg'
import { useAppDispatch, useAppSelector } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { Discussion } from '../Discussion/Discussion';
import { DiscussionSlice } from 'enteties/Discussion/redux/DiscussionSlice';

interface DiscussionNavProps {
    className?: string;
    title: string;
    subTitle?: string;
}

export const DiscussionNav: React.FC<DiscussionNavProps> = (props) => {
    const { 
        className,
        title, 
        subTitle
    } = props;

    const { curPage, totalPages } = useAppSelector(state => state.DiscussionReducer)
    const dispatch = useAppDispatch()



    return (

        <>
            { title && <h2 className={cls.title}>{ title }</h2> }
            <h3 className={cls.subTitle}>{ subTitle ?? <span style={{opacity: 0}}>Empty</span> }</h3> 
            <div className={classNames(cls.discussionNav, {}, [className ?? '' ])}>
                <div className={cls.pages}>
                    <span className={classNames(cls.curPage, {}, [])}>{curPage}</span>
                /
                    <span className={classNames(cls.totalPages, {}, [])}>{totalPages}</span>
                </div>
                <div>
                    <button  
                        onClick={()=>dispatch(DiscussionSlice.actions.decreaseCurPage())}
                        disabled={curPage === 1}>
                        <Arrow className={classNames(cls.arrow, {[cls.unactive]: curPage === 1}, [cls.prevArrow])}  />
                    </button>
                    <button 
                        onClick={()=>dispatch(DiscussionSlice.actions.increaseCurPage())}
                        disabled={curPage === totalPages}
                    >
                        <Arrow className={classNames(cls.arrow, {[cls.unactive]: curPage === totalPages}, [cls.nextArrow])} />
                    </button>
                </div>
            </div>
        </>
    );
}