from rest_framework import serializers

from item.serializers import ItemSerializer
from order.models import Order


class OrderSerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True)

    class Meta:
        model = Order
        # fields = ['customer_text']
        fields = '__all__'
        # exclude = ['created', 'updated']
        # depth = 1


class CreateOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        # fields = ['customer_text']
        # fields = '__all__'
        # exclude = ['created', 'updated']
        exclude = ['buyer']
        # depth = 1
        # read_only_fields = ('id',)
