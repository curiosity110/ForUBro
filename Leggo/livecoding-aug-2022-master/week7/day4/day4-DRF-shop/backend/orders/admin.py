from django.contrib import admin
from django.contrib.admin import ModelAdmin

from orders.models import Order, SuspiciousOrders


class OrderAdmin(ModelAdmin):
    list_display = ['id', 'reference', 'buyer']


admin.site.register(Order, OrderAdmin)
admin.site.register(SuspiciousOrders)
