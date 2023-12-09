from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponseRedirect, JsonResponse
from django.utils.html import escape
import random
import string
import requests

from .models import *
from .serializers import *

DOMAIN = "http://localhost:8000/"

@api_view(['GET'])
def send_request(request):
    url = "http://localhost:8000/aMv26DO/"
    data = {'url': 'https://cohost.org/tomforsyth/post/943070-a-matter-of-precisio', 'user': 'admin'}
    #headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    r = requests.post(url, data=data)
    return Response(r.content)

@api_view(['POST'])
def shorten_url(request):
    print(request.data['url'])
    long_url = escape(request.data['url'])
    user_id = request.data['user']
    try:
        url_record = Identifiers.objects.get(long_url=long_url)
        short_url_key = url_record.short_url_key
        short_url = DOMAIN + short_url_key 
        return Response(short_url, status=status.HTTP_200_OK)
    except Identifiers.DoesNotExist:
        # generate a random alphanumeric key
        rand_key = ''.join(random.choices(string.ascii_letters + string.digits, k=7))
        # make sure the key is not already used
        while(Identifiers.objects.filter(short_url_key=rand_key).exists()):
            rand_key = ''.join(random.choices(string.ascii_letters + string.digits, k=7))
        # create record in db
        short_url_key = rand_key
        url_object = {'long_url': long_url, 'short_url_key': short_url_key, 'user_identifier': user_id}
        serializer = IdentifiersSerializer(data=url_object)
        if serializer.is_valid():
            serializer.save()
            short_url = DOMAIN + short_url_key
            return Response(short_url, status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def redirect_url(request, short_url_key):
    try:
        url_record = Identifiers.objects.get(short_url_key=short_url_key)
        long_url = url_record.long_url
        return HttpResponseRedirect(long_url)
    except Identifiers.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def get_user_history(request, user_id):
    try:
        user_records = Identifiers.objects.filter(user_identifier=user_id)
        serializer = IdentifiersSerializer(user_records, many=True)
        return JsonResponse(serializer.data, safe=False)
    except Identifiers.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def return_something(request):
    return Response({"name: ":"John"})
    
