""" This is a module.  """
from django.db import models

# Create your models here.
class Note(models.Model):
    """
    Notes is a good note
    """

    name = models.CharField(max_length=255, unique=True)
    notes = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
