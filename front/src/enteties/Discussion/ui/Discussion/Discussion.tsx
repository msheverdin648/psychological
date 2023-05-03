import { classNames } from 'shared/lib/classNames/classNames';
import { DiscussionForm } from '../DiscussionForm/DiscussionForm';
import cls from './Discussion.module.scss';
import { DiscussionNav } from '../DiscussionNav/DiscussionNav';

interface DiscussionProps {
    className?: string;
}

export const Discussion: React.FC<DiscussionProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.discussion, {}, [className ?? '' ])} id={'appointment'}>
            <div className="container">
                <div className={cls.discussionContent}>
                    <DiscussionForm />
                    <DiscussionNav className={cls.nav}/>
                </div>
            </div>
        </div>
    );
}