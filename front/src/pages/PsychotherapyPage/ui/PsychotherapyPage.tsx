import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PsychotherapyPage.module.scss';

interface PsychotherapyPageProps {
    className?: string;
}

const PsychotherapyPage: React.FC<PsychotherapyPageProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.psychotherapyPage, {}, [className ?? ''])}>
            Психотерапия
        </div>
    );
}

export default PsychotherapyPage;