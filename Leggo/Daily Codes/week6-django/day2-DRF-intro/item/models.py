from django.db import models


class Item(models.Model):
    name = models.CharField(max_length=250)
    price = models.IntegerField()
    cost = models.IntegerField()

    def __str__(self):
        return f'ID {self.id}: {self.name}'
