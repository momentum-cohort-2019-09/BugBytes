# Generated by Django 2.2.7 on 2019-11-25 21:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BugBytes', '0008_delete_test_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='species',
            name='tensorflow_id',
            field=models.IntegerField(default=0),
        ),
    ]
