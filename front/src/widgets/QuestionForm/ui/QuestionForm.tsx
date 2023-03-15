import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import { TextArea } from 'shared/ui/TextArea/TextArea';
import cls from './QuestionForm.module.scss';

interface QuestionFormProps {
    className?: string;
}

export const QuestionForm: React.FC<QuestionFormProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.questionForm, {}, [className ?? '' ])}>
            <h2 className={cls.title}>
                Задать вопрос
            </h2>
            <div className={cls.row}>
                <Input placeholder='Как к вам обращаться' className={cls.input}/>
                <Input placeholder='Email, не обязательно' className={cls.input}/>
            </div>
            <div className={cls.row}>
                <Input placeholder='Email, не обязательно' className={cls.input} />
                <Input placeholder='Ник в Telegram' className={cls.input}/>
            </div>
            <div className={cls.row}>
                <TextArea placeholder={'Ваш вопрос'} className={cls.input}>
                </TextArea>
            </div>
            <Button theme={ButtonTheme.BLUE} className={cls.button}>Отправить вопрос</Button>
            <div className={cls.policy}>
                Нажимая на кнопку, вы соглашаетесь на обработку персональных данных в соответствии с <a href="#">политикой конфиденциальности</a>
            </div>
        </div>
    );
}