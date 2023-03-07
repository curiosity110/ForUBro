from django.contrib.auth import get_user_model
from rest_framework import serializers

from items.serializers import ItemSerializer
from orders.models import Order

User = get_user_model()


class OrderSerializer(serializers.ModelSerializer):
    total = serializers.SerializerMethodField()

    def get_total(self, obj):
        return sum(obj.items.values_list('price', flat=True))

    class Meta:
        model = Order
        fields = '__all__'
        read_only_fields = ['buyer']

    def validate_items(self, value):
        if len(value) == 0:
            raise serializers.ValidationError('You need at least 1 item per order')
        return value

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['items'] = ItemSerializer(instance.items, many=True).data
        representation['buyer'] = User.objects.get(id=representation['buyer']).email
        return representation
