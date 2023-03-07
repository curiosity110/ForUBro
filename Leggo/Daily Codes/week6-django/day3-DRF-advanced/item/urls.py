from django.urls import path

from item.views import ListCreateItemView, RetrieveUpdateDestroyItemView

urlpatterns = [
    path("", ListCreateItemView.as_view()),
    path("<int:pk>/", RetrieveUpdateDestroyItemView.as_view()),
]
