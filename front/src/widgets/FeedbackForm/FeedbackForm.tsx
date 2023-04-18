import { classNames } from 'shared/lib/classNames/classNames';
import cls from './FeedbackForm.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';

interface FeedbackFormProps {
    className?: string;
    submit: any;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = (props) => {
    const { className, submit } = props;

    const {
        handleSubmit,
        register,
        formState: {errors},
        reset,
        control
    } = useForm()

    const emailRegEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const phoneRegEx = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/g

    function submitForm(data: any){
        submit(data)
        reset()
    }

    return (
        <form className={classNames(cls.inputs, {}, [className ?? ''])} onSubmit={handleSubmit(submitForm)}>
            <input 
                { 
                    ...register(
                        'name',
                        {
                            required: 'Пожалуйста введите имя'
                        }
                        
                    )
                } 
                placeholder='Имя'  
                className={cls.input} 
            />
            {errors.name?.message && typeof errors.name?.message === 'string' && (
                <span className={cls.error}>{errors.name?.message}</span>
            )}
            <input  
                { 
                    ...register(
                        'email',
                        {
                            required: 'Пожалуйста введите email',
                            pattern: {
                                value: emailRegEx,
                                message: 'Проверьте правильность введенной почты'
                            }
                        }
                        
                    )
                } 
                placeholder='Email' 
                className={cls.input} 
            />
            {errors.email?.message && typeof errors.email?.message === 'string' && (
                <span className={cls.error}>{errors.email?.message}</span>
            )}
            <input 
                { 
                    ...register(
                        'phone',
                        {
                            required: 'Пожалуйста введите номер',
                            pattern: {
                                value: phoneRegEx,
                                message: 'Проверьте правильность введенного номера'
                            }
                                
                        }
                        
                    )
                } 
                placeholder='Телефон' 
                className={cls.input} 
            />
            {errors.phone?.message && typeof errors.phone?.message === 'string' && (
                <span className={cls.error}>{errors.phone?.message}</span>
            )}
            <div className={cls.privacy}>
                <Controller 
                    name="question_agree" 
                    control={control} 
                    rules={{
                        required: 'Подтвердите согласие с условиями обработки персональных данных',
                    }}

                    render={ ({field})=> <Checkbox {...field} id='question_agree' className={cls.checkbox} />} 
                />
                <label htmlFor={'question_agree'}>Согласен с условиями обработки персональных данных в соответствии с <a href="#">политикой конфиденциальности</a></label>
            </div>
            <span className={cls.error}><>{errors.question_agree && errors.question_agree.message }</></span>

            <Button type='submit' theme={ButtonTheme.BLUE} className={cls.button}>Отправить заявку</Button>
        </form>
    );
}