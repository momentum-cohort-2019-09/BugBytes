from django.contrib.postgres.fields import ArrayField
from django.db import models


# Create your models here.

class Species(models.Model):
    tax_name = models.CharField(max_length=150)
    family = models.CharField(max_length=150)
    genus = models.CharField(max_length=150)
    size = models.CharField(max_length=150)
    colors = models.CharField(max_length=150)
    avatar = models.ImageField(blank=True, upload_to='images/')

    def __str__(self):
        return self.tax_name


class Com_Names(models.Model):
    species = models.ForeignKey(to='Species', related_name='com_name', on_delete=models.CASCADE)
    names = models.CharField(max_length=150)

