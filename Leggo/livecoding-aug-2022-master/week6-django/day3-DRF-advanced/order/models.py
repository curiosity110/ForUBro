from django.contrib.auth import get_user_model
from django.db import models

from item.models import Item

User = get_user_model()


class Order(models.Model):
    customer_text = models.CharField(max_length=250)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    items = models.ManyToManyField(to=Item, related_name='orders', blank=True)
    buyer = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name='orders')

    def __str__(self):
        return f'ID {self.id}: Order from user {self.buyer.username}'
