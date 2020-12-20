from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import UserSetView

router = routers.DefaultRouter()
router.register('account', UserSetView)


urlpatterns = [
    path('', include(router.urls)),




]
