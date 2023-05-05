import { classNames } from 'shared/lib/classNames/classNames';
import cls from './VisitService.module.scss';
import Image from 'shared/assets/img/doc-photo.jpg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';

interface VisitServiceProps {
    className?: string;
}

export const VisitService: React.FC<VisitServiceProps> = (props) => {
    const { className } = props;
    const navigate = useNavigate()

    return (
        <div className={classNames(cls.visitService, {}, [className ?? '' ])}>
            <div className={cls.column}>
                <h4 className={cls.listTitle}>
                    Я готова помочь вам с любым из этих вопросов. Просто расскажите мне, что вас беспокоит, и я постараюсь помочь вам как можно лучше.
                </h4>
                <ul className={cls.list}>
                    <li className={cls.listItem}>
                    Если вы чувствуете, что застряли и не знаете, как дальше поступить
                    </li>
                    <li className={cls.listItem}>
                    Если вы устали и не можете найти сил, чтобы продолжать

                    </li>
                    <li className={cls.listItem}>
                    Если вы чувствуете, что живете не своей жизнью и нуждаетесь в переменах, но не можете их
                    осуществить

                    </li>
                    <li className={cls.listItem}>
                    Если вас не понимают близкие и окружающие, и вы чувствуете, что страдаете от депрессии

                    </li>
                    <li className={cls.listItem}>
                    Если общение с людьми для вас стресс

                    </li>
                    <li className={cls.listItem}>
                    Если вы не довольны своей жизнью и хотите изменить почти все

                    </li>
                    <li className={cls.listItem}>
                    Если вы хотите принимать решения без зависимости от оценок окружающих

                    </li>
                    <li className={cls.listItem}>
                    Если вы хотите новую работу, но боитесь

                    </li>
                    <li className={cls.listItem}>
                    Если вы замечаете, что с вами повторяются одни и те же ситуации и хотите понять, как это
                    происходит и как изменить свою жизнь

                    </li>
                    <li className={cls.listItem}>
                    Если вы запутались в отношениях и не знаете, как дальше

                    </li>
                    <li className={cls.listItem}>
                        Если вы ищете свою истинную сущность и хотите жить осознанно и в ладу с собой и миром
                    </li>
                </ul>
                <p className={cls.text}>
                    Район метро Лубянка<br/>
                    Станция метро: Лубянка
                </p>
                <Button className={cls.button} theme={ButtonTheme.BLUE}  onClick={()=>{navigate('/for-business#appointment')}}>Записаться на консультацию</Button>
            </div>
            <div className={cls.block}>
                <img src={Image} alt="" className={cls.img} />
            </div>
        </div>
    );
}