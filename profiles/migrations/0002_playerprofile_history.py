# Generated by Django 4.1.2 on 2022-11-03 16:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='playerprofile',
            name='history',
            field=models.CharField(max_length=225, null=True),
        ),
    ]