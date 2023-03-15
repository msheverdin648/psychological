import { InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input: React.FC<InputProps> = (props) => {
    const { 
        className,
        ...otherProps
    } = props;

    return (
        <input type={'text'} className={classNames(cls.input, {}, [className ?? '' ])} {...otherProps} />  
    );
}