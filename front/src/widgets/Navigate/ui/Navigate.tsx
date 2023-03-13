import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navigate.module.scss';

interface NavigateProps {
    className?: string;
}

export const Navigate: React.FC<NavigateProps> = (props) => {
    const { className } = props;

    return (
        <nav className={classNames(cls.navigate, {}, [])}>
            
        </nav>
    );
}