from django.db import models


class Shirt(models.Model):
    CHOICES = (
        ('xs', 'XS'),
        ('s', 'S'),
        ('m', 'M'),
        ('l', 'L'),
        ('xl', 'XL'),
    )
    color = models.CharField(max_length=100)
    size = models.CharField(max_length=100, choices=CHOICES)
    price = models.IntegerField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'ID {self.id} | {self.color} | {self.size} | {self.price}'
