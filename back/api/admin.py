from django.contrib import admin
from django.utils import timezone

 
from .models import DiscussionTheme, Day, TimeSlot, Client, Appointment, CompanyRequest, Question, CertificateRequest

class TimeSlotInline(admin.TabularInline):
    model = TimeSlot
    extra = 7 # 1 week

class DayAdmin(admin.ModelAdmin):
    inlines = [TimeSlotInline]
    list_display = ['date', 'is_available']
    list_filter = ['date', 'is_available']



class TimeSlotAdmin(admin.ModelAdmin):
    list_display = ['day', 'formatted_start_time', 'formatted_end_time', 'is_available', 'is_reserved']
    list_filter = ['day', 'is_available', 'is_reserved']


    def formatted_start_time(self, obj):
        # Форматирование времени начала слота
        return timezone.localtime(obj.start_time).strftime("%H:%M")

    def formatted_end_time(self, obj):
        # Форматирование времени окончания слота
        return timezone.localtime(obj.end_time).strftime("%H:%M")
    
    formatted_start_time.admin_order_field = 'start_time'
    formatted_start_time.short_description = 'Время начала сеанса'  # Задаем название колонки в админке
    formatted_end_time.admin_order_field = 'end_time'
    formatted_end_time.short_description = 'Время конца сеанса'  # Задаем название колонки в админке
   

class AppointmentAdmin(admin.ModelAdmin):
    list_display = ['client', 'time_slot', 'date_created']
    list_filter = ['client', 'time_slot']

class DiscussionThemeAdmin(admin.ModelAdmin):
    list_display = ['name']

class ClientAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'phone']


@admin.register(CompanyRequest)
class CompanyRequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'company_name', 'created_at')
    search_fields = ('name', 'email', 'phone', 'company_name', 'message')
    readonly_fields = ('created_at',)

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'messenger', 'messenger_contact')
    search_fields = ('name', 'messenger', 'messenger_contact')


@admin.register(CertificateRequest)
class CertificateRequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone')
    list_filter = ('created_at',)
    search_fields = ('name', 'email', 'phone')
    date_hierarchy = 'created_at'
    ordering = ('-created_at',)


admin.site.register(DiscussionTheme, DiscussionThemeAdmin)
admin.site.register(Day, DayAdmin)
admin.site.register(TimeSlot, TimeSlotAdmin)
admin.site.register(Client, ClientAdmin)
admin.site.register(Appointment, AppointmentAdmin)
