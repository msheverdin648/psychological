import { NewsCard } from 'enteties/NewsCard';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NewsBlock.module.scss';

interface NewsBlockProps {
    className?: string;
}

export const NewsBlock: React.FC<NewsBlockProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.newsBlock, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.content}>
                    <h2 className={cls.title}>Новости 📰</h2>
                    <div className={cls.block}>
                        <NewsCard />
                    </div>
                </div>
            </div>
        </div>
    );
}