import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Footer.module.scss';

interface FooterProps {
    className?: string;
}

export const Footer: React.FC<FooterProps> = (props) => {
    const { className } = props;

    return (
        <footer className={classNames(cls.footer, {}, [className ?? ''])}>
            
        </footer>
    );
}