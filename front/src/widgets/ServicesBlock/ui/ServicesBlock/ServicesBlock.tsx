import { ServiceBlocks } from 'enteties/Services/ServicesSlice';
import { useAppSelector } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { ServiceNav } from '../ServicesNav/ServiceNav';
import cls from './ServicesBlock.module.scss';

interface ServicesBlockProps {
    className?: string;
}

export const ServicesBlock: React.FC<ServicesBlockProps> = (props) => {
    const { className } = props;

    const { services, activeService } = useAppSelector(state => state.services)


    return (
        <div className={classNames(cls.servicesBlock, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.content}>
                    <h2 className={cls.title}>Все услуги</h2>
                    <ServiceNav className={cls.nav} />
                    <>
                        {
                            ServiceBlocks[activeService.name]({})
                        }
                    </>
                </div>
            </div>
        </div>
    );
}