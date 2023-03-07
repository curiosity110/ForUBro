from django.urls import path

from item.views import ListCreateItemView, GetUpdateDeleteItemView

urlpatterns = [
    path("", ListCreateItemView.as_view()),
    path("<int:pk>/", GetUpdateDeleteItemView.as_view()),
]
