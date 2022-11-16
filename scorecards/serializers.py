from rest_framework import serializers
from .models import Scorecard, Hole

class HoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hole
        fields="__all__"


class ScorecardSerializer(serializers.ModelSerializer):
    holes = HoleSerializer(many=True, read_only=True)
    class Meta: 
        model = Scorecard
        fields="__all__"
