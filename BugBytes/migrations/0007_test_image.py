# Generated by Django 2.2.7 on 2019-11-25 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BugBytes', '0006_auto_20191120_1721'),
    ]

    operations = [
        migrations.CreateModel(
            name='Test_Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('test_pic', models.ImageField(upload_to='tests/')),
            ],
        ),
    ]