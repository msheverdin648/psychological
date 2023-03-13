import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { className, children } = props;

    return (
        <button className={classNames(cls.button, {}, [])}>
            {children}
        </button>
    );
}