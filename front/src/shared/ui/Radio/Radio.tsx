import { InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Radio.module.scss';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    text: string;
    name: string;
    field: any;
    value: string;
}

export const Radio: React.FC<RadioProps> = (props) => {
    const { className, text, name, id, field, value} = props;

    return (
        <div className={classNames(cls.radio, {}, [className ?? '' ])}>
            <input 
                type="radio" 
                name={name} 
                value={value}  
                id={id} 
                className={cls.input} 
                checked={field.value === value}
                onChange={(e) => {
                    field.onChange(e.target.value);
                }}
            />
            <label htmlFor={id} className={classNames(cls.label, {}, [])}>
                {text}
            </label>
        </div>
    );
}