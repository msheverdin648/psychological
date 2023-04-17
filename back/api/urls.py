from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('days/', views.DaysView.as_view()),
    path('days-available/', views.AvailableTimeSlotList.as_view()),
    path('days/<day_id>/time-slots/', views.TimeSlotsView.as_view()),
    path('appointments/', views.AppointmentView.as_view()),
    path('appointments/<appointment_id>/', views.AppointmentDetailView.as_view()),
    path('discussion-themes/', views.DiscussionThemesView.as_view()),
    path('company-form/', views.CompanyFormView.as_view(), name='company-form'),
    path('contact-psychologist/', views.QuestionView.as_view(), name='contact_psychologist'),
]
