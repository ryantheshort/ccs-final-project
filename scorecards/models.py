from django.db import models

# Create your models here.
class ScorecardId(models.model):
    course = models.CharField()
    date =  models.DateTimeField
    players = models.ForeignKey('User')


class Hole(models.model):
    par = models.IntegerField()
    distance = models.IntegerField()
    score = models.IntegerField()
    playerId = models.ForeignKey('self', on_delete=models.CASCADE)
    ScorecardId = models