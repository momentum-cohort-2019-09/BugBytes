from django.shortcuts import render
from django.contrib.auth.models import Species
from rest_framework import viewsets
from BugBytes.serializers import SpeciesSerializer

# Create your views here.
class SpeciesViewSet(viewsets.ModelViewSet):
    queryset = Species.objects.all()
    serializer_class = SpeciesSerializer

class Com_NamesViewSet(viewsets.ModelViewSet):
    queryset = Com_Names.objects.all()
    serializer_class = Com_NamesSerializer

class Dist_PointViewSet(viewsets.ModelViewSet):
    queryset = Dist_Point.objects.all()
    serializer_class = Dist_PointSerializer
    