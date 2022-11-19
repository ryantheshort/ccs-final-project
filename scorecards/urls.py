from django.urls import path
from .views import ScorecardsListAPIView, LiveScorecardAPIView, HoleListAPIView, HoleDetailsAPIView, ScorecardsListUserAPIView

app_name = 'scorecards'

urlpatterns = [
    path('', ScorecardsListAPIView.as_view()),
    path('player/', ScorecardsListUserAPIView.as_view()),
    path('<int:pk>/', LiveScorecardAPIView.as_view()),
    path('holes/', HoleListAPIView.as_view()),
    path('holes/<int:pk>/', HoleDetailsAPIView.as_view())
]