# Generated by Django 3.2 on 2021-04-26 08:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nthapp', '0007_alter_playme_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='level',
            field=models.IntegerField(default=1, unique=True),
        ),
    ]
