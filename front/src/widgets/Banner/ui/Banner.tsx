import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Banner.module.scss';

interface BannerProps {
    className?: string;
}

export const Banner: React.FC<BannerProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.banner, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.content}>
                    <h2 className={cls.title} >
                        Инвестируйте в психологическое
                        здоровье сотрудников, и они впечатлят
                        вас результатом
                    </h2>
                    <Button theme={ButtonTheme.BLUE} className={cls.button}>
                        Оставить заявку
                    </Button>
                </div>
            </div>
        </div>
    );
}