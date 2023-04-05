from django.db import models
import locale

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
        return f'с {self.start_time.strftime("%H:%M")} До {self.end_time.strftime("%H:%M")} | Дата: {self.start_time.strftime("%d %b, %a")}'
    


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