from django.apps import AppConfig


class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

    # def ready(self):
    #     from .utils import generate_slots_for_week, clear_slots
    #     generate_slots_for_week()
    #     clear_slots()
    