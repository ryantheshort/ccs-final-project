from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from .models import Scorecard, Hole
from .serializers import ScorecardSerializer, HoleSerializer

# Create your views here.
class ScorecardsListAPIView(generics.ListCreateAPIView):
    serializer_class = ScorecardSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Scorecard.objects.all()

class LiveScorecardAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ScorecardSerializer
    permission_classes = (IsAuthenticated,)
    queryset = Scorecard.objects.all()

class HoleListAPIView(generics.ListCreateAPIView):
    serializer_class = HoleSerializer
    permission_classes = (IsAuthenticated,)
    queryset = Hole.objects.all()

class HoleDetailsAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = HoleSerializer
    permission_classes = (IsAuthenticated,)
    queryset = Hole.objects.all()