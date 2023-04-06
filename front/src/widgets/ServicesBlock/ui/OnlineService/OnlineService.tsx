import { classNames } from 'shared/lib/classNames/classNames';
import cls from './OnlineService.module.scss';
import Image from 'shared/assets/img/doc-photo.jpg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';

interface OnlineServiceProps {
    className?: string;
}

export const OnlineService: React.FC<OnlineServiceProps> = (props) => {
    const { className } = props;
    const navigate = useNavigate()


    return (
        <div className={classNames(cls.onlineService, {}, [className ?? '' ])}>
            <div className={cls.column}>
                <p className={cls.text}>
                    Помогу вам разобраться во внутренних конфликтах и преодолеть психологические проблемы, используя принципы психоанализа. Удобный способ получить помощь, не покидая дома. Восстановите свое эмоциональное здоровье с помощью онлайн-психоаналитической психотерапии.
                </p>
                <Button className={cls.button} theme={ButtonTheme.BLUE}  onClick={()=>{navigate('/psychotherapy#appointment')}}>Записаться на консультацию</Button>
            </div>
            <div className={cls.block}>
                <img src={Image} alt="" className={cls.img} />
            </div>
        </div>
    );
}