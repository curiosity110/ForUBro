from django.contrib import admin
from django.contrib.admin import ModelAdmin

from registration_profile.models import RegistrationProfile


class RegistrationProfileAdmin(ModelAdmin):
    list_display = ['id', 'user', 'code', 'aware_from']


admin.site.register(RegistrationProfile, RegistrationProfileAdmin)
