import { classNames } from 'shared/lib/classNames/classNames';
import { DiscussionForm } from '../DiscussionForm/DiscussionForm';
import cls from './Discussion.module.scss';

interface DiscussionProps {
    className?: string;
}

export const Discussion: React.FC<DiscussionProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.discussion, {}, [className ?? '' ])} id={'appointment'}>
            <div className="container">
                <DiscussionForm />
            </div>
        </div>
    );
}