import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Footer.module.scss';
import {ReactComponent as Logo} from 'shared/assets/img/icons/logo.svg'
import {ReactComponent as TgIcon} from 'shared/assets/img/icons/tg.svg'
import { Link } from 'react-router-dom';
import { PrivacyPolicy } from '../PrivacyPolicy/PrivacyPolicy';
import { CustomLink } from 'shared/ui/Link/CustomLink';

interface FooterProps {
    className?: string;
}

export const Footer: React.FC<FooterProps> = (props) => {
    const { className } = props;

    return (
        <footer className={classNames(cls.footer, {}, [className ?? ''])}>
            <div className="container">
                <div className={cls.footerContent}>
                    <div className={cls.column}>
                        <Link to="/" className={cls.logo} ><Logo /></Link>
                        <PrivacyPolicy />
                    </div>

                    <div className={cls.column}>
                        <CustomLink className={cls.link} to="/psychotherapy">Психотерапия</CustomLink>
                        <CustomLink className={cls.link} to="/">Для бизнеса</CustomLink>
                        <CustomLink className={cls.link} to="/about">Обо мне</CustomLink>
                        <CustomLink className={cls.link} to="/psychotherapy#services">Все услуги</CustomLink>
                    </div>

                    <div className={cls.column}>
                        <CustomLink className={cls.link} to="/psychotherapy#certificates">Подарочные сертификаты</CustomLink>
                        <CustomLink className={cls.link} to="/#contacts">Контакты</CustomLink>
                    </div>

                    <div className={cls.column}>
                        <a href="https://t.me/nikolaevaly" target='_blank' rel="noreferrer"><TgIcon /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}