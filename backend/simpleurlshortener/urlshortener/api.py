from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import random
import string
import requests

from .models import *
from .serializers import *

@api_view(['GET'])
def send_request(request):
    url = "http://localhost:8000/aMv26DO/"
    data = {'url': 'https://cohost.org/tomforsyth/post/943070-a-matter-of-precisio', 'user': 'admin'}
    #headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    r = requests.post(url, data=data)
    return Response(r.content)

@api_view(['POST'])
def shorten_url(request):
    print(request.data)
    return Response("OK")

    # generate a random alphanumeric key
    # key = ''.join(random.choices(string.ascii_letters + string.digits, k=7))

@api_view(['GET'])
def redirect_url(request, short_url):
    return Response({})

@api_view(['GET'])
def get_user_history(request, user_id):
    return Response({})