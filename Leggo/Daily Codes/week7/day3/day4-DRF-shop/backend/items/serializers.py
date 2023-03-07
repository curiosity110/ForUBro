from rest_framework import serializers

from items.models import Item


class ItemSerializer(serializers.ModelSerializer):
    # more_data = serializers.SerializerMethodField()
    #
    # def get_more_data(self):
    #     return 'any data'

    def validate_brand(self, value):
        if value == 'Lacoste':
            raise serializers.ValidationError("We don't sell stuff from this brand")
        return value

    def validate(self, data):
        if data['cost'] >= data['price']:
            raise serializers.ValidationError("We need to make money!")
        return data

    class Meta:
        model = Item
        exclude = ['cost']


class StaffItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

    def validate(self, data):
        if data['price'] <= data['cost']:
            raise serializers.ValidationError({'price': 'Bad businnes!'})
        return data
