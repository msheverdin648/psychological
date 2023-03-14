import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NewsCard.module.scss';

interface NewsCardProps {
    className?: string;
}

export const NewsCard: React.FC<NewsCardProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.newsCard, {}, [className ?? '' ])}>
            
        </div>
    );
}