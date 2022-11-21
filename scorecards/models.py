from django.db import models
from django.conf import settings

# Create your models here.
class Scorecard(models.Model):
    course = models.CharField(max_length=55)
    date =  models.DateTimeField()
    players = models.ManyToManyField(settings.AUTH_USER_MODEL)
    


class Hole(models.Model):
    number = models.IntegerField()
    par = models.IntegerField()
    distance = models.IntegerField()
    hole = models.IntegerField(blank=True, default=0)
    player1Score = models.IntegerField(blank=True, default=0)
    player2Score = models.IntegerField(blank=True, default=0)
    player3Score = models.IntegerField(blank=True, default=0)
    player4Score = models.IntegerField(blank=True, default=0)
    player = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    scorecard = models.ForeignKey(Scorecard, on_delete=models.CASCADE, related_name="holes")