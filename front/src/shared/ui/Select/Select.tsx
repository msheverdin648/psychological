import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { SelectHTMLAttributes } from 'react';


export interface SelectOptions {
    text: any;
    value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    className?: string;
    options: SelectOptions[];
}

export const Select: React.FC<SelectProps> = (props) => {
    const { className, options, ...otherProps } = props;

    return (
        <select className={classNames(cls.select, {}, [className ?? '' ])} {...otherProps}>
            {
                options.map((option, index)=>(
                    <option className={cls.option} key={`${index}-${option.value}`} value={option.value}>{option.text}</option>
                ))
            }
        </select>
    );
}