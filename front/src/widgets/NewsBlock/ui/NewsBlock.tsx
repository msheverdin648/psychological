import { INews, NewsCard } from 'enteties/NewsCard';
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NewsBlock.module.scss';

import  News_1  from 'shared/assets/img/news/news_1.jpg'
import  News_2  from 'shared/assets/img/news/news_2.jpg'
import  News_3  from 'shared/assets/img/news/news_3.jpg'

interface NewsBlockProps {
    className?: string;
}

export const NewsBlock: React.FC<NewsBlockProps> = (props) => {
    const { className } = props;


    const [news] = useState<INews[]>(
        [
            {
                id: 1,
                title: 'Психотерапевт назвала сигналы — предвестники развода',
                date: new Date('2023-01-20'),
                img: News_1 
            },
            {
                id: 2,
                title: 'День объятий 2023',
                date: new Date('2023-01-20'),
                img: News_2 
            },
            {
                id: 3,
                title: 'Ловец слов: как оценить характер человека по тексту сообщения',
                date: new Date('2023-01-20'),
                img: News_3 
            },
        ]
    )

    return (
        <div className={classNames(cls.newsBlock, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.content}>
                    <h2 className={cls.title}>Новости 📰</h2>
                    <div className={cls.block}>
                        {
                            news.map((news, index)=>(
                                <NewsCard news={news} key={`newsCard_${index}`} className={cls.card} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}