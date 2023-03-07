from rest_framework import serializers

from item.models import Item


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'
        # read_only_fields = ['cost']

    def validate(self, data):
        if data['price'] <= data['cost']:
            raise serializers.ValidationError({'price': 'Bad businnes!'})
        return data
