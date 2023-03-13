import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage: React.FC<MainPageProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.mainPage, {}, [className ?? ''])}>
        </div>
    );
}


export default MainPage;