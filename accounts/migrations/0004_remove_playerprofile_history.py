# Generated by Django 4.1.2 on 2022-11-15 16:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_alter_playerprofile_is_verified'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='playerprofile',
            name='history',
        ),
    ]