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
                    Добро пожаловать на сайт психолога Людмилы Николаевой!
                </p>
                <p className={cls.text}>
                Я - сертифицированный психолог с большим опытом работы в индивидуальной и
                    семейной терапии. Моя цель - помочь вам разобраться в своих эмоциях, принять
                    свою личность и научиться управлять своими мыслями и чувствами.
                </p>
                <p className={cls.text}>
                На моем сайте вы найдете информацию об услугах, которые я предоставляю,
                    включая индивидуальные консультации и семейную терапию. Я также предлагаю
                    консультации по вопросам личностного роста и самопознания, помогая своим
                    клиентам достичь своих целей и максимального потенциала.
                </p>
                <p className={cls.text}>
                Я работаю в онлайн-формате, что позволяет мне помочь клиентам из любой точки
                    мира. Я гарантирую конфиденциальность и профессионализм в каждой
                    консультации.
                </p>
                <p className={cls.text}>
                Если вы хотите начать работу над своими проблемами и найти решение для своих
                    эмоциональных и психологических проблем, свяжитесь со мной сегодня и начните
                    ваш путь к здоровому и счастливому будущему.
                </p>
                <Button className={cls.button} theme={ButtonTheme.BLUE}  onClick={()=>{navigate('/for-business#appointment')}}>Записаться на консультацию</Button>
            </div>
            <div className={cls.block}>
                <img src={Image} alt="" className={cls.img} />
            </div>
        </div>
    );
}