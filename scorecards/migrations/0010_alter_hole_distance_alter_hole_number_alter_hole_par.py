# Generated by Django 4.1.2 on 2022-11-21 17:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scorecards', '0009_hole_hole'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hole',
            name='distance',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='hole',
            name='number',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='hole',
            name='par',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]