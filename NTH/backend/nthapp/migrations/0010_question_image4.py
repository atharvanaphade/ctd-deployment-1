# Generated by Django 3.1 on 2021-05-23 06:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nthapp', '0009_auto_20210523_1200'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='image4',
            field=models.URLField(default=''),
        ),
    ]
