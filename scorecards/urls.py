from django.urls import path
from .views import ScorecardsListAPIView, LiveScorecardAPIView, HoleListAPIView

app_name = 'scorecards'

urlpatterns = [
    path('', ScorecardsListAPIView.as_view()),
    path(':scorecard/', LiveScorecardAPIView.as_view()),
    path(':hole', HoleListAPIView.as_view())
]