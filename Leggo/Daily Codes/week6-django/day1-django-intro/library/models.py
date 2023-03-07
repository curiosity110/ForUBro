from django.db import models


class Book(models.Model):
    author = models.CharField(max_length=200)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    price = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return f'ID {self.id}: {self.title}'
