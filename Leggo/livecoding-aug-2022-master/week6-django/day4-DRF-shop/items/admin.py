from django.contrib import admin
from django.contrib.admin import ModelAdmin

from items.models import Item


class ItemAdmin(ModelAdmin):
    list_display = ['id', 'brand', 'type', 'model', 'size', 'available', 'price', 'cost']
    search_fields = ['brand', 'type', 'size']
    list_filter = ['brand', 'type', 'size']


admin.site.register(Item, ItemAdmin)
