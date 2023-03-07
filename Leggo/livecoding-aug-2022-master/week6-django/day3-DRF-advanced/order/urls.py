from django.urls import path

from order.views import ListCreateOrderView, RetrieveUpdateDestroyOrderView, BookmarkOrderView

urlpatterns = [
    path("", ListCreateOrderView.as_view()),
    path("<int:id>/", RetrieveUpdateDestroyOrderView.as_view()),
    path("bookmark/<int:pk>/", BookmarkOrderView.as_view()),
]
