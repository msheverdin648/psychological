import { ParamHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ServicesNavLink.module.scss';

interface ServicesNavLinkProps extends ParamHTMLAttributes<HTMLSpanElement> {
    className?: string;
    active: boolean;
}

export const ServicesNavLink: React.FC<ServicesNavLinkProps> = (props) => {
    const { 
        className,
        children,
        active,
        ...otherProps

    } = props;

    return (
        <span className={classNames(cls.servicesNavLink, {[cls.active]: active}, [className ?? '' ])} {...otherProps}>
            {children}
        </span>
    );
}