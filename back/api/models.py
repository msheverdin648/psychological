from django.db import models
import locale
from django.utils import timezone


# Устанавливаем локаль на русскую
# locale.setlocale(locale.LC_TIME, 'ru_RU')

class DiscussionTheme(models.Model):
    
    name = models.CharField("Название темы", max_length=255)

    class Meta:
        verbose_name = "Тема для разговоров"
        verbose_name_plural = "Темы для разговоров"

    def __str__(self):
        return self.name


class Day(models.Model):
    date = models.DateField("День для записи")
    is_available = models.BooleanField("День рабочий/не рабочий", default=True)

    class Meta:
        verbose_name = "День"
        verbose_name_plural = "Дни"

    def __str__(self):
        return str(self.date)
    

class TimeSlot(models.Model):
    start_time = models.DateTimeField("Время начала слота")
    end_time = models.DateTimeField("Время окончания слота")
    is_available = models.BooleanField("Слот открыт/закрыт", default=True)
    is_reserved = models.BooleanField("Статус слота занят/свободен", default=False)
    day = models.ForeignKey(Day, verbose_name="День слота", on_delete=models.CASCADE, related_name='time_slots')

    class Meta:
        verbose_name = "Слот для записи"
        verbose_name_plural = "Слоты для записи"

    def __str__(self):
        start_time = timezone.localtime(self.start_time).strftime("%H:%M")
        end_time = timezone.localtime(self.end_time).strftime("%H:%M")
        date = timezone.localtime(self.start_time).strftime("%d %b, %a")
        return f'с {start_time} До {end_time} | Дата: {date}'
    


class Client(models.Model):
    name = models.CharField("Имя клиента", max_length=100)
    email = models.EmailField("Email клиента")
    phone = models.CharField("Телефон клиента", max_length=20)
    experience = models.BooleanField('Опыт терапии есть/нет')

    def __str__(self):
        return self.name


class Appointment(models.Model):
    

    client = models.ForeignKey(Client, verbose_name="Клиент", on_delete=models.CASCADE)
    time_slot = models.ForeignKey(TimeSlot, verbose_name="Выбранный слот", on_delete=models.CASCADE)
    date_created = models.DateTimeField(verbose_name="Дата создания заявки", auto_now_add=True)
    discussion_themes = models.ManyToManyField(DiscussionTheme, verbose_name=("Темы для разговоров выбранные пользователем"))

    class Meta:
        verbose_name = "Запись к психологу"
        verbose_name_plural = "Записи к психологу"

    def __str__(self):
        return f"Запись {self.id} ({self.client.name}) на {self.time_slot}"



class CompanyRequest(models.Model):
    name = models.CharField(verbose_name="Имя",max_length=255)
    company_name = models.CharField(verbose_name="Компания", max_length=255)
    email = models.EmailField(verbose_name="Почта")
    phone = models.CharField(verbose_name="Телефон", max_length=20)
    company_size = models.CharField(verbose_name="Размер компании", max_length=255)
    created_at = models.DateTimeField(verbose_name="Дата создания заявки", auto_now_add=True)

    class Meta:
        verbose_name = "Заявки на идивидуальное предложение для компаний"
        verbose_name_plural = "Заявка на идивидуальное предложение для компаний"


    def __str__(self):
        return f'{self.company_name} - {self.name}. Email: {self.email}, phone: {self.phone}'
    


class Question(models.Model):
    name = models.CharField(verbose_name="Имя", max_length=255)
    email = models.EmailField(verbose_name="Почта", blank=True, null=True)
    messenger = models.CharField(verbose_name="Мессенеджер", max_length=255)
    messenger_contact = models.CharField(verbose_name="Контакт мессенеджера", max_length=255)
    question = models.TextField(verbose_name="Вопрос")

    def __str__(self):
        return self.name
    


class CertificateRequest(models.Model):
    name = models.CharField(verbose_name='Имя', max_length=255)
    email = models.EmailField(verbose_name='Email')
    phone = models.CharField(verbose_name='Телефон', max_length=20)
    created_at = models.DateTimeField(verbose_name="Дата создания заявки", auto_now_add=True)


    class Meta:
        verbose_name = 'Заявка на сертификат'
        verbose_name_plural = 'Заявки на сертификаты'

    def __str__(self):
        return self.name


class Tariff(models.Model):
    prev_price = models.PositiveIntegerField(verbose_name='Цена до скидки')
    title = models.CharField(max_length=255, verbose_name='Название тарифа')
    discount = models.PositiveIntegerField(verbose_name='Скидка в %', blank=True, null=True)
    info = models.CharField(max_length=255, verbose_name='Информация о тарифе', blank=True, null=True)
    sessions = models.PositiveIntegerField(verbose_name='Кол-во сессий', default=0)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')

    class Meta:
        verbose_name = 'Тариф'
        verbose_name_plural = 'Тарифы'

    def __str__(self):
        return self.title
