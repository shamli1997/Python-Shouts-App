from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.
class AppView(TemplateView):
    template_name = 'frontend/index.html'