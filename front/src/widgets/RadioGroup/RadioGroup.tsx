import { classNames } from 'shared/lib/classNames/classNames';
import cls from './RadioGroup.module.scss';
import { Controller } from 'react-hook-form';
import { Radio } from 'shared/ui/Radio/Radio';
import { useEffect } from 'react';

interface RadioGroupProps {
    className?: string;
    name: string;
    options: { label: string; value: string }[];
    control: any;
    rules: any;
}

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
    const { className, options, name, control, rules } = props;


    return (
        <div className={classNames(cls.radioGroup, {}, [className ?? '' ])}>
            {options.map((option) => (
                <Controller
                    key={option.value}
                    name={name}
                    control={control}
                    defaultValue={options[0].value}
                    rules={rules}
                    render={({ field }) => (
                        <Radio
                            id={`${name}-${option.value}`}
                            name={name}
                            value={option.value}
                            text={option.label}
                            field={field}
                        />
                    )}
                />
            ))}
        </div>
    );
}