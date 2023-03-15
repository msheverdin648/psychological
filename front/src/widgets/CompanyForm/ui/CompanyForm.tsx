import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import { Radio } from 'shared/ui/Radio/Radio';
import cls from './CompanyForm.module.scss';

interface CompanyFormProps {
    className?: string;
}

export const CompanyForm: React.FC<CompanyFormProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.companyForm, {}, [className ?? '' ])}>
            <div className={cls.imageBlock}></div>
            <div className={cls.contentBlock}>
                <h3 className={cls.title}>
                Получите
                индивидуальное
                предложение
                </h3>
                <ul className={cls.list}>
                    <li className={cls.listItem}>исследуем и конкретизируем запрос</li>
                    <li className={cls.listItem}>поможем определить оптимальный формат</li>
                    <li className={cls.listItem}>посчитаем бюджет</li>
                </ul>
                <div className={cls.inputs}>
                    <Input className={cls.input} placeholder={'Имя'} />
                    <Input className={cls.input} placeholder={'Название компании'} />
                    <Input className={cls.input} placeholder={'Почта'} />
                    <Input className={cls.input} placeholder={'Телефон'} />
                </div>

                <div className={cls.radios}>
                    <h3 className={cls.radiosTitle} >Размер компании</h3>
                    <Radio text={'Менее 1 000 сотрудников'} id={'less_1k'} name={'size'} className={cls.radio}/>
                    <Radio text={'От 1 000 до 5 000'} id={'1k_5k'} name={'size'} className={cls.radio}/>
                    <Radio text={'От 5 000 до 10 0000'} id={'5k_10k'} name={'size'} className={cls.radio}/>
                    <Radio text={'Более 10 000 '} id={'more_10k'} name={'size'} className={cls.radio}/>
                </div>
                <Button theme={ButtonTheme.BLUE}>Отправить заявку</Button>
                <p className={cls.policy}>
                    Нажимая кнопку “Отправить заявку”, 
                    Вы соглашаетесь с <a href="#">условиями обработки персональных данных</a>
                </p>
            </div>
        </div>
    );
}