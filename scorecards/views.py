from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from .models import Scorecard
from .serializers import ScorecardSerializer

# Create your views here.
class ScorecardsListAPIView(generics.ListCreateAPIView):
    serializer_class = ScorecardSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Scorecard.objects.all()

class LiveScorecardAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ScorecardSerializer
    permission_classes = (IsAuthenticated,)
    queryset = Scorecard.objects.all()

class HoleListAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ScorecardSerializer
    permission_classes = (IsAuthenticated,)
    queryset = Scorecard.objects.all()