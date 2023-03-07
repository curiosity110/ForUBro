from django.contrib.auth.models import User
from django.db import models

from item.models import Item


class Order(models.Model):
    customer_text = models.CharField(max_length=250)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    items = models.ManyToManyField(to=Item, related_name='orders')
    buyer = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name='orders')

    def __str__(self):
        return f'ID {self.id}: Order from user {self.buyer.username}'

# Order.objects.first().items
# Item.objects.first().orders

# User.objects.first().orders