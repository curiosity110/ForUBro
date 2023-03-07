from django.contrib.auth import get_user_model
from django.db import models

from items.models import Item

User = get_user_model()


class Order(models.Model):
    reference = models.CharField(max_length=250, blank=True)
    items = models.ManyToManyField(to=Item, related_name='orders')
    buyer = models.ForeignKey(User, related_name='orders', on_delete=models.PROTECT)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    reviewer = models.ManyToManyField(to=User, related_name='suspicious_orders', through='SuspiciousOrders')

    def __str__(self):
        return f'ID {self.pk}: {self.buyer.email}'


class SuspiciousOrders(models.Model):
    orders = models.ForeignKey(to=Order, on_delete=models.CASCADE, related_name='suspicious_orders_relationship')
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='suspicious_orders_relationship')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
