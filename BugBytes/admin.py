from django.contrib import admin
from .models import Species, Com_Names, Photos


# Register your models here.
admin.site.register(Species)
admin.site.register(Com_Names)
admin.site.register(Photos)