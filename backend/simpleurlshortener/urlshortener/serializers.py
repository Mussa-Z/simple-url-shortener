from rest_framework import serializers
from .models import *

class IdentifiersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Identifiers
        fields = ['id', 'long_url', 'short_url', 'user_identifier', 'date_added']