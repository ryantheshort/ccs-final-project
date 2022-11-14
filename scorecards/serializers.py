from rest_framework import serializers
from .models import Scorecard, Hole

class ScorecardSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Scorecard
        fields="__all__"

class HoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hole
        fields="__all__"