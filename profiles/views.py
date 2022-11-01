from rest_framework import generics

from profiles.serializers import PlayerProfileSerializer
from .permissions import IsUserOrReadOnly
from .models import PlayerProfile
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
# Create your views here.

class PlayerProfileListAPIView(generics.ListCreateAPIView):
    serializer_class = PlayerProfileSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = PlayerProfile.objects.all()

class PlayerProfileDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsUserOrReadOnly,)
    queryset = PlayerProfile.objects.all()
    serializer_class = PlayerProfileSerializer