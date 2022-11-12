from rest_framework import serializers
from .models import ScorecardId, Hole

class ScorecardIdSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ScorecardId
        fields="__all__"

class HoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hole
        fields="__all__"