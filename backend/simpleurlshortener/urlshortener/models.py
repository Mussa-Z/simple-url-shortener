from django.db import models

class Identifiers(models.Model):
    id = models.AutoField(primary_key=True)
    long_url = models.TextField(null=False, blank=False)
    short_url_key = models.CharField(max_length=256, null=False, blank=False)
    user_identifier = models.CharField(max_length=256, null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        indexes = [ 
            models.Index(fields=['user_identifier'])
        ]
        ordering = ['-date_added']

    def __str__(self):
        return self.long_url