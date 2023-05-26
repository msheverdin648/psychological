import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import { TextArea } from 'shared/ui/TextArea/TextArea';
import cls from './QuestionForm.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { Select } from 'shared/ui/Select/Select';
import { useState } from 'react';
import { useGetUrl } from 'shared/hooks/useGetUrl/useGetUrl';
import { sendForm } from 'shared/lib/handlers/sendForm';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';

interface QuestionFormProps {
    className?: string;
}

export const QuestionForm: React.FC<QuestionFormProps> = (props) => {
    const { className } = props;

    const [messenger, setMessenger] = useState('Telegram')

    const { control, handleSubmit, formState: {errors}, reset } = useForm();

    const { url } = useGetUrl('contact-psychologist')

    function sendFormHandler(data: any){
        sendForm(data, url)
        reset()
    }

    const emailRegEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const phoneRegEx = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/g

    return (
        <form onSubmit={handleSubmit(sendFormHandler)} className={classNames(cls.questionForm, {}, [className ?? '' ])} id="Q_A">
            <h2 className={cls.title}>
                Задать вопрос
            </h2>
            <div className={cls.row}>
                <div className={cls.column}>
                    <Controller 
                        name="name"
                        control={control}
                        rules={{
                            required: 'Введите пожалуйста Ваше имя'
                        }}
                        render={ ({field})=> 
                            <Input 
                                {...field}
                                placeholder='Как к вам обращаться' 
                                className={cls.input} 
                            />
                        } 
                    />
                    <span className={cls.error}><>{errors.name && errors.name.message }</></span>
                </div>
                <div className={cls.column}>
                    <Controller 
                        name="email" 
                        control={control} 
                        rules={{
                            pattern: {
                                value: emailRegEx,
                                message: 'Проверьте введенный Email'
                            }
                        }}
                        render={ ({field})=> 
                            <Input 
                                {...field}
                                placeholder='Email, не обязательно'
                                className={cls.input} 
                            />
                        } 
                    />
                    <span className={cls.error}><>{errors.email && errors.email.message }</></span>
                </div>

            </div>
            <div className={cls.row}>
                <div className={cls.column}>
                    <Controller 
                        name="messenger" 
                        control={control} 
                        defaultValue={messenger}
                        render={ ({field})=> 
                            <Select 
                                onClick={el=>setMessenger(el.currentTarget.value)}
                                {...field}  
                                className={cls.input}  
                                options={
                                    [
                                        {text: <span>Telegram</span>, value: 'Telegram'},
                                        {text: <span>WhatsApp</span>, value: 'WhatsApp'},
                                        {text: <span>Viber</span>, value: 'Viber'},

                                    ]}
                            />
                        }
                    />
                </div>
                <div className={cls.column}>
                    <Controller 
                        name="messenger_contact" 
                        rules={{
                            required: 'Пожалуйста введите контакт для связи с вами',
                            pattern: {
                                value: messenger === 'Telegram' ? /^.*./g : phoneRegEx,
                                message: 'Проверьте правильность написания номера'
                            }  
                        }}
                        control={control} 
                        render={ ({field})=> 
                            <Input 
                                {...field}
                                placeholder={messenger === 'Telegram' ? 'Ник в Telegram' : 'Номер телефона' } 
                                className={cls.input} 
                            />
                        } 
                    />
                    <span className={cls.error}><>{errors.messenger_contact && errors.messenger_contact.message }</></span>
                </div>

            </div>
            <div className={cls.row}>
                <div className={cls.column} >
                    <Controller 
                        name="question" 
                        control={control} 
                        rules={{
                            required: 'Пожалуйста введите Ваш вопрос'
                        }}
                        render={ ({field})=> 
                            <TextArea 
                                {...field} 
                                placeholder={'Ваш вопрос'} 
                                className={cls.input}
                            
                            ></TextArea>
                        } 
                    />
                    <span className={cls.error}><>{errors.question && errors.question.message }</></span>
                </div>

            </div>
            <Button theme={ButtonTheme.BLUE} className={cls.button}>Отправить вопрос</Button>
            <div className={cls.policy}>
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
        </form>
    );
}