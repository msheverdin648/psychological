import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Header.module.scss'
import {ReactComponent as Logo} from 'shared/assets/img/icons/logo.svg'
import { Button } from 'shared/ui/Button/Button';


interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
    const { className } = props

    return (
        <header className={classNames(cls.header, {}, [])}>
            <Logo className={classNames(cls.icon, {}, []) }/>
            <Button>Записаться на прием</Button>
        </header>
    )
}