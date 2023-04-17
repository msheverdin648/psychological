from rest_framework import generics
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework import status

from .models import (
    Day,
    TimeSlot,
    Client,
    Appointment,
    DiscussionTheme,
    Question
)
from .serializers import (
    DaySerializer,
    TimeSlotSerializer,
    AppointmentSerializer,
    AppointmentDetailSerializer,
    DiscussionThemeSerializer,
    CompanyFormSerializer,
    QuestionSerializer
)


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
        ).order_by('day__date','start_time')

        return available_time_slots

class AppointmentView(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    csrf_exempt = True
    

    
class AppointmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentDetailSerializer
    csrf_exempt = True


class DiscussionThemesView(generics.ListCreateAPIView):
    queryset = DiscussionTheme.objects.all()
    serializer_class = DiscussionThemeSerializer


class CompanyFormView(generics.CreateAPIView):
    serializer_class = CompanyFormSerializer


    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            # получаем данные формы
            name = serializer.validated_data.get('name')
            email = serializer.validated_data.get('email')
            phone = serializer.validated_data.get('phone')
            company_name = serializer.validated_data.get('company_name')
            company_size = serializer.validated_data.get('company_size')

            # отправляем письмо на почту клиента
            send_mail(
                'Спасибо за вопрос',
                f'Здравствуйте, {name}.\n\nБлагодарим вас за обращение. В ближайшее время с вами свяжутся.\n\nС наилучшими пожеланиями,\n\nЛюдмила Юрьевна.',
                'info@nikolaevaly.ru',
                [email],
                fail_silently=False,
            )

            # отправляем письмо на почту психолога
            send_mail(
                f'Новая заявка на индивидуальное предложение для компании от {name}',
                f'Имя: {name},\nEmail: {email},\nТелефон: {phone},\nКомпания: {company_name},\nРазмер компании: {company_size}',
                'info@nikolaevaly.ru',
                ['info@nikolaevaly.ru'],
                fail_silently=False,
            )

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class QuestionView(generics.CreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()

            name = serializer.validated_data.get('name')
            email = serializer.validated_data.get('email')
            messenger = serializer.validated_data.get('messenger')
            messenger_contact = serializer.validated_data.get('messenger_contact')
            question = serializer.validated_data.get('question')


            if email:
                # отправляем письмо на почту клиента
                send_mail(
                    'Спасибо за вопрос',
                    f'Здравствуйте, {name}.\n\nБлагодарим вас за обращение. В ближайшее время с вами свяжутся.\n\nС наилучшими пожеланиями,\n\nЛюдмила Юрьевна.',
                    'info@nikolaevaly.ru',
                    [email],
                    fail_silently=False,
                )

            # Отправка email на почту психолога
            send_mail(
                'Новый вопрос от пользователя',
                f'''Имя: {name},\n{messenger}: {messenger_contact},\nВопрос: {question}''',
                'info@nikolaevaly.ru',
                # ['info@nikolaevaly.ru'],
                ['msheverdin648@gmail.com'],
                fail_silently=False,
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)