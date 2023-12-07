from django.urls import include, path
from . import api

urlpatterns = [
    path('long/<str:long_url>', api.shorten_url, name='shorten_URL_api'),
    path('<str:short_url>', api.redirect_url, name='redirect_URL_api'),
    path('user/<str:user_id>', api.get_user_history, name='user_history_api'),
]