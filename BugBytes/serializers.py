from BugBytes.models import Species, Com_Names, Dist_Point
from rest_framework import serializers

class SpeciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Species
        fields = ['tax_name', 'family', 'genus', 'size', 'colors', 'id', 'avatar',]


class Com_NamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Com_Names
        fields = ['species', 'names', 'id']


class Dist_PointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dist_Point
        fields = ['species', 'longitude', 'latitude', 'id']
