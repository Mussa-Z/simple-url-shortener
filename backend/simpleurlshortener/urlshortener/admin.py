from django.contrib import admin
from .models import *

class IdentifiersAdmin(admin.ModelAdmin):
    list_display = ('id', 'long_url', 'short_url', 'user_identifier', 'date_added')

admin.site.register(Identifiers, IdentifiersAdmin)

