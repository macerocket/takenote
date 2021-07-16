from rest_framework import routers
from .api import NoteViewSet, ActionItemViewSet

router = routers.DefaultRouter()
router.register("api/notes", NoteViewSet, "notes")
router.register("api/actionitems", ActionItemViewSet, "actionitems")

urlpatterns = router.urls
