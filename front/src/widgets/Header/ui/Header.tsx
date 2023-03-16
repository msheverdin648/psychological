import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Header.module.scss'
import {ReactComponent as Logo} from 'shared/assets/img/icons/logo.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';


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
                    <p className={cls.text}>+7 950 000 00 00</p>
                    <Button theme={ButtonTheme.GREEN} onClick={()=>{navigate('/psychotherapy')}}>Записаться на прием</Button>
                </div>
            </div>
        </header>
    )
}