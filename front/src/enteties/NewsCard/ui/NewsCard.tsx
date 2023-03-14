import { classNames } from 'shared/lib/classNames/classNames';
import { INews } from '../models/types';
import cls from './NewsCard.module.scss';

import {ReactComponent as HeartIcon} from 'shared/assets/img/icons/heart.svg'
import { Link } from 'react-router-dom';

interface NewsCardProps {
    className?: string;
    news: INews;
}


export const NewsCard: React.FC<NewsCardProps> = (props) => {
    const { className, news } = props;

    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };

    return (
        <div className={classNames(cls.newsCard, {}, [className ?? '' ])}>
            <h3 className={cls.title}>{news.title}</h3>
            <img className={cls.img} src={news.img} alt="" /> 
            <div className={cls.row}>
                <HeartIcon />
                <span className={cls.date} >
                    {news.date.toLocaleString('ru-RU', options)}
                </span>
                <Link to={`/news/${news.id}`} className={cls.link}>
                    Читать
                </Link>
            </div>
        </div>
    );
}