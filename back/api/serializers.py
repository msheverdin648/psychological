from rest_framework import serializers
from .models import Day, TimeSlot, Appointment, DiscussionTheme, Client, CompanyRequest, Question
from django.core.mail import send_mail



class DiscussionThemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiscussionTheme
        fields = '__all__'


class TimeSlotSerializer(serializers.ModelSerializer):


    class Meta:
        model = TimeSlot
        fields = '__all__'


class DaySerializer(serializers.ModelSerializer):
    time_slots = TimeSlotSerializer(many=True, read_only=True)

    class Meta:
        model = Day
        fields = ['id', 'date', 'time_slots']


class ClientSerializer(serializers.ModelSerializer):
     class Meta:
        model = Client
        fields = '__all__'
        


class AppointmentSerializer(serializers.ModelSerializer):

    client = ClientSerializer(many=False, read_only=False)


    class Meta:
        model = Appointment
        fields = '__all__'


    def create(self, validated_data):
        client_data = validated_data.pop('client')
        discussion_themes_data = validated_data.pop('discussion_themes', []) # Извлекаем данные о темах обсуждения
        time_slot_data = validated_data.pop('time_slot')

        client, _ = Client.objects.get_or_create(
            name=client_data['name'],
            email=client_data['email'], 
            phone=client_data['phone'], 
            experience=client_data['experience'])

        appointment = Appointment.objects.create(client=client, time_slot=time_slot_data)
        appointment.discussion_themes.set(discussion_themes_data)
        appointment.save()
        time_slot_data.is_reserved = True
        time_slot_data.save()


        # отправляем письмо на почту клиента
        send_mail(
            'Спасибо за вопрос',
            f'Здравствуйте, {client_data["name"]}.\nХотим сообщить, что вы были успешно записаны на прием, который запланирован на {time_slot_data.start_time.strftime("%d.%m.%Y  %H:%M")}. \nДля подтверждения вашего приема, просим вас осуществить оплату размере 5.000 рублей, в течение 15 минут на карту: 00000000. \n\nС наилучшими пожеланиями,\nЛюдмила Юрьевна.',
            'info@nikolaevaly.ru',
            [client_data["email"]],
            fail_silently=False,
        )

        # отправляем письмо на почту психолога
        send_mail(
            f'Запись на прием {time_slot_data.start_time.strftime("%d.%m.%Y  %H:%M")} {client_data["name"]}',
            f'Имя: {client_data["name"]},\nEmail: {client_data["email"]},\nТелефон: {client_data["phone"]}',
            'info@nikolaevaly.ru',
            ['info@nikolaevaly.ru'],
            fail_silently=False,
        )
        
        return appointment
        
        
class AppointmentDetailSerializer(serializers.ModelSerializer):
    client = serializers.StringRelatedField()
    time_slot = TimeSlotSerializer()
    discussion_themes = DiscussionThemeSerializer(many=True)
    
    class Meta:
        model = Appointment
        fields = '__all__'


class CompanyFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = CompanyRequest
        exclude = ('created_at',)


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'