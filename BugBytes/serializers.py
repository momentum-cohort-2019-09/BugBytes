from BugBytes.models import Species, Com_Names, Photos
from rest_framework import serializers

class SpeciesSerializer(serializers.ModelSerializer):
    photos = serializers.StringRelatedField(many=True)
    class Meta:
        model = Species
        fields = ['tax_name', 'family', 'genus', 'size', 'colors', 'id', 'desc', 'tensorflow_id']


class Com_NamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Com_Names
        fields = ['species', 'name', 'id']


class PhotosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photos
        fields = ['species', 'image', 'id']


