import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import cls from './CompanyForm.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { RadioGroup } from 'widgets/RadioGroup/RadioGroup';
import { useGetUrl } from 'shared/hooks/useGetUrl/useGetUrl';
import { sendForm } from 'shared/lib/handlers/sendForm';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';

interface CompanyFormProps {
    className?: string;
}

export const CompanyForm: React.FC<CompanyFormProps> = (props) => {
    const { className } = props;

    const { control, handleSubmit, formState: {errors}, reset } = useForm({reValidateMode: 'onBlur'});

    const { url } = useGetUrl('company-form')

    function SendFormHandler(data: any){

        sendForm(data, url)
        reset()
    }

    const emailRegEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const phoneRegEx = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/g

    return (
        <div className={classNames(cls.companyForm, {}, [className ?? '' ])} id='companyForm'>
            <div className={cls.imageBlock}></div>
            <form className={cls.contentBlock} onSubmit={handleSubmit(SendFormHandler)}>
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
                    <Controller 
                        name="name" 
                        control={control} 
                        rules={{
                            required: 'Пожалуйста введите имя'
                        }}
                        render={ ({field})=> <Input {...field} placeholder='Имя' className={cls.input} />} 
                    />
                    <span className={cls.error}><>{errors.name && errors.name.message }</></span>
                    <Controller 
                        name="company_name" 
                        control={control} 
                        rules={{
                            required: 'Пожалуйста введите название компании'
                        }}
                        render={ ({field})=> <Input {...field} placeholder='Название компании' className={cls.input} />} 
                    />
                    <span className={cls.error}><>{errors.company_name && errors.company_name.message }</></span>

                    <Controller 
                        name="email" 
                        control={control} 
                        rules={{
                            required: 'Пожалуйста введите почу',
                            pattern: {
                                value: emailRegEx,
                                message: 'Проверьте правильнось почты'
                            }
                            
                        }}
                        render={ ({field})=> <Input {...field} placeholder='Почта' className={cls.input} />} 
                    />
                    <span className={cls.error}><>{errors.email && errors.email.message }</></span>

                    <Controller 
                        name="phone" 
                        control={control} 
                        rules={{
                            required: 'Пожалуйста введите номер телефона',
                            pattern: {
                                value: phoneRegEx,
                                message: 'Проверьте правильнось телефона'
                            }
                        }}

                        render={ ({field})=> <Input {...field} placeholder='Телефон' className={cls.input} />} 
                    />
                    <span className={cls.error}><>{errors.phone && errors.phone.message }</></span>

                </div>

                <div className={cls.radios}>
                    <h3 className={cls.radiosTitle} >Размер компании</h3>
                    <RadioGroup 
                        name='company_size' 
                        control={control}
                        rules={{
                            required: true
                        }}
                        options={[
                            {label: 'Менее 100 сотрудников', value: 'Менее 100 сотрудников'},
                            {label: 'От 100 до 500', value: 'От 100 до 500'},
                            {label: 'От 500 до 1000', value: 'От 500 до 1000'},
                            {label: 'Более 1000', value: 'Более 1000'},
                        ]}  
                    />
                </div>
                <Button theme={ButtonTheme.BLUE}>Отправить заявку</Button>

                <p className={cls.policy}>
                    <Controller 
                        name="company_agree" 
                        control={control} 
                        rules={{
                            required: 'Подтвердите согласие с условиями обработки персональных данных',
                        }}

                        render={ ({field})=> <Checkbox {...field} id='company_agree' className={cls.checkbox} />} 
                    />
                    <label htmlFor={'company_agree'}>Согласен с <a href="#">условиями обработки персональных данных</a></label>
                </p>
                <span className={cls.error}><>{errors.company_agree && errors.company_agree.message }</></span>


            </form>
        </div>
    );
}