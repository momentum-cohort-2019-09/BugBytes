from django.shortcuts import render
from BugBytes.models import Species, Com_Names
from rest_framework import viewsets
from BugBytes.serializers import SpeciesSerializer, Com_NamesSerializer

# Create your views here.

# API Views
class SpeciesViewSet(viewsets.ModelViewSet):
    queryset = Species.objects.all()
    serializer_class = SpeciesSerializer

class Com_NamesViewSet(viewsets.ModelViewSet):
    queryset = Com_Names.objects.all()
    serializer_class = Com_NamesSerializer


# Other

def view_species(request, pk):
    return render(request, 'BugBytes/view_species.html')
