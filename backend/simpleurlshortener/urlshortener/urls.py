from django.urls import include, path
from . import api

urlpatterns = [
    path('sendpost/', api.send_request, name='send_request_api'),
    path('aMv26DO/', api.shorten_url, name='shorten_URL_api'),
    path('<str:short_url>', api.redirect_url, name='redirect_URL_api'),
    path('user/<str:user_id>', api.get_user_history, name='user_history_api'),
    path('api/return_something/', api.return_something, name='return_something_api'),
]