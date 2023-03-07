from django.core import validators
from django.db import models


class Item(models.Model):
    TYPES = [
        ('shirt', 'Shirt'),
        ('pants', 'Pants'),
        ('jacket', 'Jacket'),
    ]
    SIZES = [
        ('s', 'Small'),
        ('m', 'Medium'),
        ('l', 'Large'),
    ]
    COLORS = [
        ('red', 'Red'),
        ('blue', 'Blue'),
        ('darkblue', 'Darkblue'),
        ('green', 'Green'),
    ]
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    type = models.CharField(max_length=100, choices=TYPES)
    size = models.CharField(max_length=100, choices=SIZES)
    color = models.CharField(max_length=100, choices=COLORS)
    price = models.IntegerField(validators=[validators.MinValueValidator(5), validators.MaxValueValidator(100)])
    cost = models.IntegerField(validators=[validators.MinValueValidator(1), validators.MaxValueValidator(50)])
    available = models.IntegerField(help_text='Available quantity', default=0)
    description = models.TextField(blank=True)

    def __str__(self):
        return f'ID: {self.pk}: {self.brand} - {self.type} {self.model}'
