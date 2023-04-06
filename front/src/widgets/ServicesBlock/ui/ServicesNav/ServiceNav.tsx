import { ServicesSlice } from 'enteties/Services/ServicesSlice';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { CustomLink } from 'shared/ui/Link/CustomLink';
import { ServicesNavLink } from '../ServicesNavLink/ServicesNavLink';
import cls from './ServiceNav.module.scss';

interface ServiceNavProps {
    className?: string;
}

export const ServiceNav: React.FC<ServiceNavProps> = (props) => {
    const { className } = props;

    const { services, activeService } = useAppSelector(state => state.ServicesReduser)
    const dispatch = useAppDispatch()

    function changeBlockHandler(name: string) {
        dispatch(ServicesSlice.actions.setBlock(name))
    }


    return (
        <div className={classNames(cls.serviceNav, {}, [className ?? '' ])}>
            {
                services.map(({name, title})=>(
                    <ServicesNavLink onClick={()=>changeBlockHandler(name)} className={classNames(cls.link, {}, [])} key={name} active={activeService === name} >
                        {title}
                    </ServicesNavLink>
                ))
            }
        </div>
    );
}