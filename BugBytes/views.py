from django.shortcuts import render
from BugBytes.models import Species, Com_Names, Photos
from rest_framework import viewsets
from BugBytes.serializers import SpeciesSerializer, Com_NamesSerializer, PhotosSerializer
from PIL import Image

# Create your views here.

# API Views


class SpeciesViewSet(viewsets.ModelViewSet):
    queryset = Species.objects.all()
    serializer_class = SpeciesSerializer


class Com_NamesViewSet(viewsets.ModelViewSet):
    queryset = Com_Names.objects.all()
    serializer_class = Com_NamesSerializer


class PhotosViewSet(viewsets.ModelViewSet):
    queryset = Photos.objects.all()
    serializer_class = PhotosSerializer


# Other

def view_species(request, pk):
    # Change once the tensorflow_id is set up
    species = Species.objects.get(pk=pk)
    photos = Photos.objects.filter(species=species)
    return render(request, 'BugBytes/view_species.html', {'species': species, 'photos': photos})


def landing(request):
    return render(request, 'BugBytes/landing.html')
