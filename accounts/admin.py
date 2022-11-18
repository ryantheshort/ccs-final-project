from django.contrib import admin
from .models import PlayerProfile, User

# Register your models here.
admin.site.register(PlayerProfile)
admin.site.register(User)