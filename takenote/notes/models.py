""" models for the rest interface of the takenotes project.  """
from django.db import models

# Create your models here.
class Note(models.Model):
    """
    A Note represent notes taken at a meeting or w/e.
    """

    name = models.CharField(max_length=255, unique=True)
    notes = models.TextField()
    private = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name}, private={self.private}, created: {self.created_at}"


class ActionItem(models.Model):
    """
    ActionItem represents bits of text in a note that
    were extracted into a todo list.  These are identifed
    as starting with AI: or AI(user): or AI(user|due_by_date):
    and end at a newline.
    """

    note = models.ForeignKey("Note", on_delete=models.CASCADE)

    item = models.TextField()
    who = models.TextField()
    done = models.BooleanField(default=False)
    due_by = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.note. name} :: action={self.item}, who: {self.who}"
