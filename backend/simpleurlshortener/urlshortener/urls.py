from django.urls import include, path
from . import api

urlpatterns = [
    #path('sendpost/', api.send_request, name='send_request_api'),
    #path('sendurldelete/', api.send_url_delete_request, name='send_url_delete_request_api'),
    #path('senduserdelete/', api.send_user_delete_request, name='send_user_delete_request_api'),
    path('aMv26DO/', api.shorten_url, name='shorten_URL_api'),
    path('<str:short_url_key>', api.redirect_url, name='redirect_URL_api'),
    path('user/<str:user_id>', api.get_user_history, name='user_history_api'),
    path('EwD6y30/', api.update_user_history, name='update_user_history_api'),
    path('delete/<str:user_id>', api.delete_user_history, name='delete_user_history_api')
]