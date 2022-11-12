from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from .models import ScorecardId
from .serializers import ScorecardIdSerializer

# Create your views here.
class ScorecardsListAPIView(generics.ListCreateAPIView):
    serializer_class = ScorecardIdSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = ScorecardId.objects.all()

class LiveScorecardAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ScorecardIdSerializer
    permission_classes = (IsAuthenticated,)
    queryset = ScorecardId.objects.all()

class HoleListAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ScorecardIdSerializer
    permission_classes = (IsAuthenticated,)
    queryset = ScorecardId.objects.all()