from django.db import models
from django.conf import settings

# Create your models here.

class PlayerProfile(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE, blank=True)
    is_verified = models.BooleanField(default=False)
    first_name = models.CharField(max_length=225, null=True)
    last_name = models.CharField(max_length=225, null=True)