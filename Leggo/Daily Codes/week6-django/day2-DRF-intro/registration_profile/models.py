import random

from django.contrib.auth.models import User
from django.db import models


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class RegistrationProfile(models.Model):
    code = models.CharField(max_length=5, default=code_generator)
    user = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name='reg_profile')

    def __str__(self):
        return f'ID {self.id}: Order from user {self.user.username}'
