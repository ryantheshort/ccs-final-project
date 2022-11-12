from django.db import models
from django.conf import settings

# Create your models here.
class ScorecardId(models.Model):
    course = models.CharField(max_length=55)
    date =  models.DateTimeField()
    players = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


class Hole(models.Model):
    par = models.IntegerField()
    distance = models.IntegerField()
    score = models.IntegerField()
    playerId = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    ScorecardId = models.ForeignKey(ScorecardId, on_delete=models.CASCADE)