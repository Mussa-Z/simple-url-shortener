from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('urlshortener.urls')),
    path('admin/5jsknum/', admin.site.urls),
]
