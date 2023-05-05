import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MenuBurger.module.scss';
import { CustomLink } from 'shared/ui/Link/CustomLink';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from 'shared/assets/img/icons/logo.svg'
import { BurgerButton } from 'shared/ui/BurgerButton/BurgerButton';
import { useState } from 'react';

interface MenuBurgerProps {
    className?: string;
}

export const MenuBurger: React.FC<MenuBurgerProps> = (props) => {
    const { className } = props;

    const [isActive, setIsActive] = useState(false)

    return (
        <header className={classNames(cls.menuBurger, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.header}>
                    <Link to="/">
                        <Logo className={classNames(cls.icon, {}, []) }/>
                    </Link>
                    <BurgerButton active={isActive} onClick={()=>setIsActive(prev=>!prev)}/>
                </div>
            </div>
            <div className={classNames(cls.navigateContent, {[cls.opened]: isActive}, [])}>
                <CustomLink className={cls.link} to='/' clickHandler={()=>setIsActive(false)} >Психотерапия</CustomLink>
                <CustomLink className={cls.link} to='/for-business' clickHandler={()=>setIsActive(false)}>Для бизнеса</CustomLink>
                <CustomLink className={cls.link} to='/about' clickHandler={()=>setIsActive(false)}>Обо мне</CustomLink>
                <CustomLink className={cls.link} to='/#services' clickHandler={()=>setIsActive(false)}>Все услуги</CustomLink>
                <CustomLink className={cls.link} to='/#certificates' clickHandler={()=>setIsActive(false)}>Подарочные сертификаты </CustomLink>
                <CustomLink className={cls.link} to='/#contacts' clickHandler={()=>setIsActive(false)}>Контакты</CustomLink>
            </div>  
        </header>
    );
}