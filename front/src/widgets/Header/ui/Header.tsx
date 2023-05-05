import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Header.module.scss'
import {ReactComponent as Logo} from 'shared/assets/img/icons/logo.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navigate } from 'widgets/Navigate/ui/Navigate';



interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
    const { className } = props
    const navigate = useNavigate()

    return (
        <header className={classNames(cls.header, {}, [])}>
            <div className="container">
                <div className={cls.headerContent}>
                    <Link to="/">
                        <Logo className={classNames(cls.icon, {}, []) }/>
                    </Link>
                    <p className={cls.text}>Психоаналитическая психотерапия 🎯</p>
                    <a href='tel:+79675556819' className={cls.text}>+7 967 555 68 19</a>
                    <Button theme={ButtonTheme.GREEN} onClick={()=>{navigate('/#appointment')}}>Записаться на прием</Button>
                </div>
            </div>
            <Navigate />
        </header>
    )
}