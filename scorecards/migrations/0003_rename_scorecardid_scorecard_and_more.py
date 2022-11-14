# Generated by Django 4.1.2 on 2022-11-14 16:14

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('scorecards', '0002_alter_hole_playerid'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ScorecardId',
            new_name='Scorecard',
        ),
        migrations.RenameField(
            model_name='hole',
            old_name='playerId',
            new_name='player',
        ),
        migrations.RenameField(
            model_name='hole',
            old_name='ScorecardId',
            new_name='scorecard',
        ),
        migrations.AddField(
            model_name='hole',
            name='number',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]