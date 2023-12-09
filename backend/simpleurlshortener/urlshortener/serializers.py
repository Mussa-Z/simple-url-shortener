from rest_framework import serializers
from .models import *

class IdentifiersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Identifiers
        fields = ['long_url', 'short_url_key', 'user_identifier']