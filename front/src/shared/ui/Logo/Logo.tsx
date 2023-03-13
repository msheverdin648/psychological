import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Logo.module.scss';
import LogoSVG from 'shared/assets/img/icons/logo.svg'


interface LogoProps {
    className?: string;
}

export const Logo: React.FC<LogoProps> = (props) => {
    const { className } = props;

    return (
    // <img src={logo} className={classNames(cls.logo, {}, [className])}>
            
        // </img>
        <>
            <LogoSVG className={classNames(cls.icon, {}, []) }/>
        </>
    );
}