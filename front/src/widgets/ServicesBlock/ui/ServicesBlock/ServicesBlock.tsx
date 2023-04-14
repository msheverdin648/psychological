import { ServiceBlockNames, ServiceBlocks } from 'enteties/Services/ServicesSlice';
import { useAppSelector } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { ServiceNav } from '../ServicesNav/ServiceNav';
import cls from './ServicesBlock.module.scss';
import { FamilyService } from '../FamilyService/FamilyService';
import { VisitService } from '../VisitService/VisitService';
import { OnlineService } from '../OnlineService/OnlineService';

interface ServicesBlockProps {
    className?: string;
}

export const ServicesBlock: React.FC<ServicesBlockProps> = (props) => {
    const { className } = props;

    const {  activeService } = useAppSelector(state => state.ServicesReduser)


    return (
        <div className={classNames(cls.servicesBlock, {}, [className ?? '' ])} id={'services'}>
            <div className="container">
                <div className={cls.content}>
                    <h2 className={cls.title}>Все услуги</h2>
                    <ServiceNav className={cls.nav} />
                    {
                        activeService === ServiceBlockNames.FAMILY
                            ?
                            <FamilyService/>
                            :
                            activeService === ServiceBlockNames.VISIT
                                ?
                                <VisitService />
                                :
                                <OnlineService />
                    }
                </div>
            </div>
        </div>
    );
}