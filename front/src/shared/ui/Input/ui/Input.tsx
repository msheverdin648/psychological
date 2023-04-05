import { InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    theme?: InputThemes;
}


export const enum InputThemes {
    GRAY='gray',
    WHITE='white',
} 

export const Input: React.FC<InputProps> = (props) => {
    const { 
        className,
        theme=InputThemes.GRAY,
        ...otherProps
    } = props;



    return (
        <input type={'text'} className={classNames(cls.input, {}, [className ?? '', cls[theme]])} {...otherProps} />  
    );
}