from django.urls import path
from .views import PlayerProfileListAPIView, PlayerProfileDetailAPIView

app_name = 'profiles'

urlpatterns = [
    path('profiles/players/',
        PlayerProfileListAPIView.as_view(), name='player_list'),
    path('profiles/players/<int:pk>/', PlayerProfileDetailAPIView.as_view(),
        name='player_profile'),
]