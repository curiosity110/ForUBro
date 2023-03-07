from django.core import validators
from django.db import models


class Item(models.Model):
    name = models.CharField(max_length=250)
    price = models.IntegerField()
    cost = models.IntegerField(validators=[validators.MinValueValidator(1), validators.MaxValueValidator(100)])

    # def clean(self):
    #     pass

    def __str__(self):
        return f'ID {self.id}: {self.name}'
