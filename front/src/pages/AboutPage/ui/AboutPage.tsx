import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AboutPage.module.scss';
import Avatar from 'shared/assets/img/avatar.png'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface AboutPageProps {
    className?: string;
}

export const AboutPage: React.FC<AboutPageProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.aboutPage, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.content}>
                    <div className={cls.block}>
                        <img src={Avatar} alt="" className={cls.img} />
                        <span className={cls.name}>Людмила Николаева</span>
                        <span className={cls.position}>Психоаналитический<br/>психотерапевт</span>
                        <Button theme={ButtonTheme.BLUE} >Записаться на консультацию</Button>
                    </div>
                    <div className={classNames(cls.block, {}, [cls.secondBlock])}>
                        <h3 className={cls.listTitle}>Опыт работы</h3>
                        <span className={cls.description}>
                            10 лет Ведет личную и семейную психотерапию. Работает со взрослыми, детьми и подростками. Возможна как краткосрочная, так и долгосрочная терапия.
                        </span>
                        <h3 className={cls.listTitle}>Специализация</h3>
                        <ul className={cls.list}>    
                            <li className={cls.listItem}>
                                — взаимоотношения с партнером, коллегами, родителями,
                            </li>
                            <li className={cls.listItem}>
                                — развитие навыков полноценного взаимодействия с окружением,
                            </li>
                            <li className={cls.listItem}>
                                — одиночество и изоляция, личностные и жизненные кризисы,
                            </li>
                            <li className={cls.listItem}>
                                — стрессовые периоды и сложности адаптации,
                            </li>
                            <li className={cls.listItem}>
                                — эмоциональная самоподдержка и саморегуляция,
                            </li>
                            <li className={cls.listItem}>
                                — развитие родительской компетентности и уверенности родительской позиции,
                            </li>
                            <li className={cls.listItem}>
                                — развитие навыков самоподдержки и профилактика эмоционального выгорания,
                            </li>
                            <li className={cls.listItem}>
                                — консультирование по возрастным сообенностям развития, воспитания и обучения детей,
                            </li>
                            <li className={cls.listItem}>
                                — обучение навыкам психологической помощи своему ребенку.
                            </li>
                            <li className={cls.listItem}>
                                — детско-родительские отношения, страхи, капризы, тревожность,
                            </li>
                            <li className={cls.listItem}>
                                — трудности общения, взаимоотношений со сверстниками и взрослыми,
                            </li>
                            <li className={cls.listItem}>
                                — проблемное поведение: агрессивность, воровство, ложь.
                            </li>
                        </ul>
                        <span className={cls.description}>
                            Подробнее о вопросах, с которыми работает психолог можно узнать в приложении.
                        </span>

                        <h3 className={cls.listTitle}>Образование</h3>
                        <ul className={cls.list}>
                            <li className={cls.listItem}>
                                2006 г. — Московский городской педагогический университет (МГПУ), факультет психологии, преподаватель психологии.
                            </li>
                            <li className={cls.listItem}>
                                2008 г. — Московский институт гештальта и психодрамы, теория и практика гештальт-терапии, I и II ступени.
                            </li>
                        </ul>

                        <h3 className={cls.listTitle}>Повышение квалификации</h3>
                        <ul className={cls.list}>
                            <li className={cls.listItem}>
                                2018 г. — Московский институт гештальта и психодрамы, Введение в терапевтическую модель терапии Вайолет Оклендер при работе с детьми и подростками.
                            </li>
                            <li className={cls.listItem}>
                                2018 г. — Институт психодрамы, коучинга и ролевого тренинга, психодраматическая работа с детьми и семьей.
                            </li>
                            <li className={cls.listItem}>
                                2018 г. — Московский гештальт институт, спецкурс «Родитель и ребенок».
                            </li>
                            <li className={cls.listItem}>
                                2009 г. — Центр «Взаимодействие», особенности телефонного консультирования.
                            </li>
                            <li className={cls.listItem}>
                                2009 г. — Московский институт процессуальной терапии и консультирования, работа с шоковыми травмами и травмами развития.
                            </li>
                            <li className={cls.listItem}>
                                2007 г. — Санкт-Петербургский институт сказкотерапии, сказкотерапия.2006 г. — ЦПП «Катарсис», теория и практика арт-терапии.
                            </li>
                        </ul>

                        <h3 className={cls.listTitle}>Методы</h3>
                        <ul className={cls.list}>
                            <li className={cls.listItem}>
                                Гештальт-терапияАрт-терапияСказкотерапия
                            </li>
                  
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}