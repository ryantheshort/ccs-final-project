from rest_framework import serializers
from dj_rest_auth.models import TokenModel
from .models import PlayerProfile
from dataclasses import field

class PlayerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerProfile
        fields = '__all__'

class TokenSerializer(serializers.ModelSerializer):
    # id = serializers.ReadOnlyField(source='user.id')
    username = serializers.ReadOnlyField(source='user.username')
    
    # is_superuser = serializers.ReadOnlyField(source='user.is_superuser')
   

    class Meta:
        model = TokenModel
        fields = '__all__'