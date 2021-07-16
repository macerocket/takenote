from notes.models import Note, ActionItem
from rest_framework import viewsets, permissions
from .serializers import NoteSerializer, ActionItemSerializer


class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = NoteSerializer


class ActionItemViewSet(viewsets.ModelViewSet):
    queryset = ActionItem.objects.select_related("note").all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ActionItemSerializer
