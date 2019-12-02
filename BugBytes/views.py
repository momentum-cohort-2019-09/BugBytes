# global null

from django.shortcuts import render
from BugBytes.models import Species, Com_Names, Photos
from rest_framework import viewsets
from BugBytes.serializers import SpeciesSerializer, Com_NamesSerializer, PhotosSerializer
from PIL import Image
from django.http import JsonResponse, HttpResponse

from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

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


# class ViewSpeciesInfo(APIView):
#     renderer_classes = [TemplateHTMLRenderer]
#     template_name = 'view_species.html'

#     def get(self, request, tensorflow_id):
#         species = Species.objects.get(tensorflow_id=tensorflow_id)
#         photos = Photos.objects.filter(species=species)
#         com_names = Com_Names.objects.filter(species=species)
#         queryset = {'species': species,
#                     'photos': photos, 'com_names': com_names}
#         return Response(queryset)

# Other


def view_species(request, tensorflow_id):
    # Change once the tensorflow_id is set up
    species = Species.objects.get(tensorflow_id=tensorflow_id)
    photos = Photos.objects.filter(species=species)
    com_names = Com_Names.objects.filter(species=species)

    return render(request, 'BugBytes/view_species.html', {'species': species, 'photos': photos, 'com_names': com_names})


def landing(request):

    return render(request, 'BugBytes/landing.html')


def model_json(request):
    path = 'BugBytes/static/machine/model.json'
    with open(path, 'r') as myfile:
        data = myfile.read()
    response = HttpResponse(content=data)
    response['Content-Type'] = 'application/json'
    return response
