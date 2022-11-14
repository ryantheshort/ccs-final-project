from django.db import models
from django.conf import settings

# Create your models here.
class Scorecard(models.Model):
    course = models.CharField(max_length=55)
    date =  models.DateTimeField()
    players = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


class Hole(models.Model):
    number = models.IntegerField()
    par = models.IntegerField()
    distance = models.IntegerField()
    score = models.IntegerField()
    player = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    scorecard = models.ForeignKey(Scorecard, on_delete=models.CASCADE)