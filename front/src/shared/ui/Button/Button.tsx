import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

export const enum ButtonTheme {
    GREEN = 'green',
    BLUE = 'blue',
    WHITE = 'white',

} 

export const Button: React.FC<ButtonProps> = (props) => {
    const { 
        className, 
        children, 
        theme=ButtonTheme.WHITE, 
        ...otherProps 
    } = props;

    return (
        <button className={classNames(cls.button, {}, [className ?? '', cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
}