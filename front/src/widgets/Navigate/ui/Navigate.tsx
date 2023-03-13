import { classNames } from 'shared/lib/classNames/classNames';
import { CustomLink } from 'shared/ui/Link/CustomLink';
import cls from './Navigate.module.scss';

interface NavigateProps {
    className?: string;
}

export const Navigate: React.FC<NavigateProps> = (props) => {
    const { className } = props;

    return (
        <nav className={classNames(cls.navigate, {}, [])}>
            <div className="container">
                <div className={cls.navigateContent}>
                    <CustomLink to='/'>Для бизнеса</CustomLink>
                    <CustomLink to='/psychotherapy'>Психотерапия</CustomLink>
                    <CustomLink to='/about'>Обо мне</CustomLink>
                    <CustomLink to='#services'>Все услуги</CustomLink>
                    <CustomLink to='#certificates'>Подарочные сертификаты </CustomLink>
                    <CustomLink to='#contacts'>Контакты</CustomLink>
                    <CustomLink to='#Q&A'>Вопросы и ответы</CustomLink>
                </div>
            </div>
        </nav>
    );
}