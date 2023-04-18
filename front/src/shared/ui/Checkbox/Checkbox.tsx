import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Checkbox.module.scss';
import { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    id: string;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
    const { className, id, ...otherProps } = props;

    return (
        <input type='checkbox' id={id} className={classNames(cls.checkbox, {}, [className ?? '' ])}  {...otherProps}/>
    );
}