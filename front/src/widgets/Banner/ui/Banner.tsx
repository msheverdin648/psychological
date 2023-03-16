import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Banner.module.scss';
import { ReactNode } from 'react';



interface BannerProps {
    className?: string;
    photo?: string;
    color?: string;
    children: ReactNode;
}

export const Banner: React.FC<BannerProps> = (props) => {
    const { 
        className,
        photo,
        color,
        children
    } = props;


    return (
        <div className={classNames(cls.banner, {}, [className ?? '' ])} style={
            { 
                backgroundImage: photo ? `url(${photo})` : `none`,
                backgroundColor: color ? color : 'none',
            }
        }>
            <div className="container">
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </div>
    );
}