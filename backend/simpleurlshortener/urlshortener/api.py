from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import *
from .serializers import *

@api_view(['POST'])
def shorten_url(request, long_url):
    return Response({})

@api_view(['GET'])
def redirect_url(request, short_url):
    return Response({})

@api_view(['GET'])
def get_user_history(request, user_id):
    return Response({})