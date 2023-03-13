import { LinkHTMLAttributes } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CustomLink.module.scss';

interface CustomLinkProps extends LinkHTMLAttributes<HTMLLinkElement>{
    className?: string;
    to: string;
}



export const CustomLink: React.FC<CustomLinkProps> = (props) => {
    const { 
        className, 
        to,
        children,
        ...otherProps
    } = props;


    const location = useLocation()

    return (
        <Link to={to} className={classNames(cls.link, {[cls.active]:location.pathname===to}, [className ?? '' ])}>
            {children}
        </Link>
    );
}