import { classNames } from 'shared/lib/classNames/classNames';
import cls from './OnlineService.module.scss';

interface OnlineServiceProps {
    className?: string;
}

export const OnlineService: React.FC<OnlineServiceProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.onlineService, {}, [className ?? '' ])}>
            Online service
        </div>
    );
}