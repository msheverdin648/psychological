import { useAppSelector } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './FamilyService.module.scss';

import Image from 'shared/assets/img/service-img.png'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';


interface FamilyServiceProps {
    className?: string;
}

export const FamilyService: React.FC<FamilyServiceProps> = (props) => {
    const { className } = props;

    

    
    
    
    
    return (
        <div className={classNames(cls.familyService, {}, [className ?? '' ])}>
            <div className={cls.block}>
                <h4 className={cls.listTitle}>Как понять, что нужно идти к семейному психотерапевту?</h4>
                <ul className={cls.list}>
                    <li className={cls.listItem}>
                        конфликт затягивается или повторяется
                    </li>
                    <li className={cls.listItem}>
                        сексуальные отношения ухудшились 
                    </li>
                    <li className={cls.listItem}>
                        в отношениях присутствует агрессия или насилие 
                    </li>
                    <li className={cls.listItem}>
                        столкнулись с непониманием, изменой, ревностью
                    </li>
                    <li className={cls.listItem}>
                        ощущаете постоянную конкуренцию
                    </li>
                    <li className={cls.listItem}>
                        произошла смена социальных ролей
                    </li>
                    <li className={cls.listItem}>
                        трудно общаться с партнером или детьми
                    </li>
                    <li className={cls.listItem}>
                        отсутствует поддержка
                    </li>
                    <li className={cls.listItem}>
                        нужна подготовка и помощь перед вступлением в брак
                    </li>
                    <li className={cls.listItem}>
                        переживаете травму или развод
                    </li>
                </ul>

                <h4 className={cls.listTitle}>Семейный психотерапевт может помочь:</h4>
                <ul className={cls.list}>
                    <li className={cls.listItem}>
                        наладить и вернуть атмосферу гармонии, 
                        влечения и доверия
                    </li>
                    <li className={cls.listItem}>
                        проработать личные границы и уважать границы партнера
                    </li>
                    <li className={cls.listItem}>
                        определить совместные ценности и планы
                    </li>
                    <li className={cls.listItem}>
                        научить слышать и слушать друг друга
                    </li>
                    <li className={cls.listItem}>
                        решить сложности в воспитании детей
                    </li>
                </ul>
                <Button theme={ButtonTheme.BLUE}>Записаться на консультацию</Button>
            </div>
            <div className={cls.block}>
                <img src={Image} alt="" />
            </div>
        </div>
    );
}