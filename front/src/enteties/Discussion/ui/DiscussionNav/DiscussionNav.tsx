import { classNames } from 'shared/lib/classNames/classNames';
import cls from './DiscussionNav.module.scss';
import { ReactComponent as Arrow } from 'shared/assets/img/icons/arrow-right.svg'
import { Button } from 'shared/ui/Button/Button';

interface DiscussionNavProps {
    className?: string;
}

export const DiscussionNav: React.FC<DiscussionNavProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.discussionNav, {}, [className ?? '' ])}>
            <div className={cls.pages}>
                <span className={classNames(cls.curPage, {}, [])}>1</span>
                /
                <span className={classNames(cls.totalPages, {}, [])}>6</span>
            </div>
            <div>
                <button disabled><Arrow className={classNames(cls.arrow, {[cls.unactive]: true}, [cls.prevArrow])}  /></button>
                <button><Arrow className={classNames(cls.arrow, {[cls.unactive]: false}, [cls.nextArrow])} /></button>
            </div>
        </div>
    );
}