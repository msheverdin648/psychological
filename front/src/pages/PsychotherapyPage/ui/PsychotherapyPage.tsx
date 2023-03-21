import { classNames } from 'shared/lib/classNames/classNames';
import { AskQuestion } from 'widgets/AskQuestion';
import { CanHelpBlock } from 'widgets/CanHelpBlock';
import cls from './PsychotherapyPage.module.scss';
import banner from 'shared/assets/img/banner-2.jpg'
import { Banner } from 'widgets/Banner';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { AboutConsultationBlock } from 'widgets/AboutConsultationBlock';
import { RegularSessionsBlock } from 'widgets/RegularSessionsBlock';
import { ChangeNowBlock } from 'widgets/ChangeNowBlock';
import { ServicesBlock } from 'widgets/ServicesBlock';
import { Discussion } from 'enteties/Discussion';

interface PsychotherapyPageProps {
    className?: string;
}

const PsychotherapyPage: React.FC<PsychotherapyPageProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.psychotherapyPage, {}, [className ?? ''])}>
            <CanHelpBlock />
            <Discussion />
            <ServicesBlock />
            <ChangeNowBlock />
            <AboutConsultationBlock />
            <RegularSessionsBlock />
            <Banner photo={banner} color={'rgba(66, 136, 189, 0.85)'}>
                <h2 className={cls.title}>
                    Дарите заботу <br /> близким
                </h2>
                <span className={cls.icon}>🎁</span>
                <h3 className={cls.subtitle}>Подарочный сертификат</h3>
                <p className={cls.text}>Переписка или видеоконсультация вы определите сами </p>
                <Button theme={ButtonTheme.GREEN} className={cls.button}>
                    Заказать сертификат
                </Button>
            </Banner>
            <AskQuestion />
        </div>

    );
}

export default PsychotherapyPage;