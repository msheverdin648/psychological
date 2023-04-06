import { classNames } from 'shared/lib/classNames/classNames';
import cls from './BurgerButton.module.scss';
import { ButtonHTMLAttributes } from 'react';

interface BurgerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    active: boolean;
}

export const BurgerButton: React.FC<BurgerButtonProps> = (props) => {
    const { className, active, ...otherProps } = props;

    return (
        <button className={classNames(cls.burgerButton, {[cls.active]: active}, [className ?? ''])} {...otherProps}>
            <span className={classNames(cls.stick, {[cls.active]: active}, [className ?? ''])}></span>
        </button>
    );
}