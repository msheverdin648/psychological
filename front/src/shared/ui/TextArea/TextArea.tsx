import { TextareaHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './TextArea.module.scss';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    className?: string;
}

export const TextArea: React.FC<TextAreaProps> = (props) => {
    const { 
        className,
        children,
        ...otherProps

    } = props;

    return (
        <textarea  className={classNames(cls.textArea, {}, [className ?? '' ])} {...otherProps}>
            {children}
        </textarea>
    );
}