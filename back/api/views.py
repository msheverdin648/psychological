from rest_framework import generics
from django.utils import timezone
from .models import (
    Day,
    TimeSlot,
    Client,
    Appointment,
    DiscussionTheme
)
from .serializers import DaySerializer, TimeSlotSerializer, AppointmentSerializer, AppointmentDetailSerializer, DiscussionThemeSerializer


class DaysView(generics.ListCreateAPIView):
    queryset = Day.objects.all()
    serializer_class = DaySerializer


class TimeSlotsView(generics.ListCreateAPIView):
    serializer_class = TimeSlotSerializer

    def get_queryset(self):
        day_id = self.kwargs.get('day_id')
        return TimeSlot.objects.filter(day_id=day_id)
    
class AvailableTimeSlotList(generics.ListAPIView):
    serializer_class = TimeSlotSerializer

    def get_queryset(self):
        # получаем список дат на ближайшие 7 дней, включая сегодняшний день
        start_date = timezone.localdate()
        end_date = start_date + timezone.timedelta(days=6)
        days = Day.objects.filter(date__range=[start_date, end_date], is_available=True)

        # получаем все доступные слоты для этих дат
        available_time_slots = TimeSlot.objects.filter(
            day__in=days,
            is_available=True,
            is_reserved=False,
        )

        return available_time_slots


class AppointmentView(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    
        


class AppointmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentDetailSerializer


class DiscussionThemesView(generics.ListCreateAPIView):
    queryset = DiscussionTheme.objects.all()
    serializer_class = DiscussionThemeSerializer
