from datetime import datetime, timedelta, time
from .models import Day, TimeSlot
from django.utils import timezone



def generate_slots_for_week():
    # получаем текущую дату и дату через неделю
    current_date = datetime.now().date()
    end_date = current_date + timedelta(days=7)
    
    # проходимся по каждому дню в диапазоне текущей даты и текущей даты +7 дней
    while current_date <= end_date:
        day, created = Day.objects.get_or_create(date=current_date)
        
        # создаем слоты для дня, если их еще нет
        if day.time_slots.count() == 0:
            start_time = datetime.combine(current_date, datetime.min.time()).replace(hour=10, minute=0, second=0)
            end_time = start_time + timedelta(minutes=30)
            
            # создаем слоты с интервалом в 30 минут на протяжении рабочего дня (с 10 до 18)
            while start_time < datetime.combine(current_date, datetime.min.time()).replace(hour=18, minute=0, second=0):
                TimeSlot.objects.create(start_time=start_time, end_time=end_time, day=day)
                start_time = end_time
                end_time = end_time + timedelta(minutes=30)
        
        # переходим к следующему дню
        current_date += timedelta(days=1)


def generate_slots():
    today = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
    end_date = today + timedelta(days=7)
    start_time = time(hour=8)
    end_time = time(hour=18)
    step = timedelta(hours=1)
    slots = []
    for date in [today + timedelta(days=i) for i in range((end_date - today).days)]:
        if not Day.objects.filter(date=date).exists():
            Day.objects.create(date=date, is_available=True)
        day = Day.objects.get(date=date)
        current_time = datetime.combine(date, start_time)
        end_slot_time = datetime.combine(date, end_time)
        while current_time < end_slot_time:
            TimeSlot.objects.get_or_create(
                start_time=current_time,
                end_time=current_time + step,
                day=day
            )
            current_time += step
    return slots


def clear_slots():
    # Удаление просроченных слотов
    expired_time_slots = TimeSlot.objects.filter(end_time__lte=timezone.now(), is_reserved=False)
    expired_time_slots.delete()

    # Удаление дней без свободных слотов
    days_with_slots = set(TimeSlot.objects.values_list('day', flat=True).distinct())
    days_with_available_slots = set(TimeSlot.objects.filter(is_available=True, is_reserved=False).values_list('day', flat=True).distinct())
    days_without_available_slots = days_with_slots - days_with_available_slots
    Day.objects.filter(id__in=days_without_available_slots).delete()