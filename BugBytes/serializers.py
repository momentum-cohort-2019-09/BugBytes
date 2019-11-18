from django.contrib.auth.models import Species
from rest_framework import serializers

class SpeciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Species
        fields = ['tax_name', 'family', 'genus', 'size', 'colors', 'com_names', 'distribution',]


class Com_NamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Com_Names
        fields = ['species', 'names']


class Dist_PointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dist_Point
        fields = ['species', 'longitude', 'latitude']
