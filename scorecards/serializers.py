from rest_framework import serializers
from .models import Scorecard, Hole
from django.contrib.auth import get_user_model

User = get_user_model()


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = ('id', 'username',)

class HoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hole
        fields="__all__"


class ScorecardSerializer(serializers.ModelSerializer):
    holes = HoleSerializer(many=True, read_only=True)
    players_details = PlayerSerializer(many=True, read_only = True, source = 'players')
    class Meta: 
        model = Scorecard
        fields="__all__"
