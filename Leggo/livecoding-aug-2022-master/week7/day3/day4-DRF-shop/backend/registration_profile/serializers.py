from rest_framework import serializers

from registration_profile.models import RegistrationProfile


class RegProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistrationProfile
        fields = '__all__'
