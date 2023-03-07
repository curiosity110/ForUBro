# Generated by Django 4.1.1 on 2022-10-11 09:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0001_initial'),
        ('orders', '0004_order_reviewer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='items',
            field=models.ManyToManyField(related_name='orders', to='items.item'),
        ),
    ]