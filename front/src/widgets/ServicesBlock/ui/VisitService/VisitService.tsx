import { classNames } from 'shared/lib/classNames/classNames';
import cls from './VisitService.module.scss';

interface VisitServiceProps {
    className?: string;
}

export const VisitService: React.FC<VisitServiceProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.visitService, {}, [className ?? '' ])}>
            Visit service
        </div>
    );
}