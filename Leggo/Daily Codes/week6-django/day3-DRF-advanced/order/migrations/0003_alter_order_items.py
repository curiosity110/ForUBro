# Generated by Django 4.1.2 on 2022-10-05 09:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("item", "0002_alter_item_cost"),
        ("order", "0002_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="order",
            name="items",
            field=models.ManyToManyField(
                blank=True, related_name="orders", to="item.item"
            ),
        ),
    ]
