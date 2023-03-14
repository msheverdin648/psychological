import { classNames } from 'shared/lib/classNames/classNames';
import { CardsBlock } from 'widgets/CardsBlock';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage: React.FC<MainPageProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.mainPage, {}, [className ?? ''])}>
            <CardsBlock />
        </div>
    );
}


export default MainPage;