import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { AskQuestion } from 'widgets/AskQuestion';
import { Banner } from 'widgets/Banner';
import { BuisnesDescriptionBlock } from 'widgets/BuisnesDescriptionBlock/ui/BuisnesDescriptionBlock';
import { CanHelpBlock } from 'widgets/CanHelpBlock';
import { CardsBlock } from 'widgets/CardsBlock';
import { CheckBlock } from 'widgets/CheckBlock/ui/CheckBlock';
import { CompanyForm } from 'widgets/CompanyForm/ui/CompanyForm';
import { HowItWorks } from 'widgets/HowItWork';
import { NewsBlock } from 'widgets/NewsBlock';
import { Tariffs } from 'widgets/Tariffs';
import cls from './MainPage.module.scss';
import banner from 'shared/assets/img/banner.jpg'


interface MainPageProps {
    className?: string;
}

const MainPage: React.FC<MainPageProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.mainPage, {}, [className ?? ''])}>
            <CanHelpBlock />
            <CardsBlock />
            <Banner photo={banner} color='rgba(0, 0, 0, 0.65 )' >
                <h2 className={cls.title} >
                        Инвестируйте в психологическое
                        здоровье сотрудников, и они впечатлят
                        вас результатом
                </h2>
                <Button theme={ButtonTheme.BLUE} className={cls.button}>
                        Оставить заявку
                </Button>
            </Banner>
            <BuisnesDescriptionBlock />
            <CheckBlock />
            <HowItWorks />
            <CompanyForm />
            <Tariffs />
            <NewsBlock />
            <AskQuestion />
        </div>
    );
}


export default MainPage;