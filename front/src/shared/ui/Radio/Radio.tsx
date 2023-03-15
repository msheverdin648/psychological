import { InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Radio.module.scss';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    text: string;
    name: string;
}

export const Radio: React.FC<RadioProps> = (props) => {
    const { className, text, name, id } = props;

    return (
        <div className={classNames('', {}, [className ?? '' ])}>
            <input type="radio" name={name}  id={id} className={cls.input}/>
            <label htmlFor={id} className={classNames(cls.label, {}, [])}>
                {text}
            </label>
        </div>
    );
}