from django.urls import path
from .views import ScorecardsListAPIView, LiveScorecardAPIView, HoleListAPIView

app_name = 'scorecards'

urlpatterns = [
    path('', ScorecardsListAPIView.as_view()),
    path('<int:pk>/', LiveScorecardAPIView.as_view()),
    path('holes/', HoleListAPIView.as_view())
]