from django.urls import path

from shirt.views import ListShirtsView, GetUpdateDeleteShirtView

urlpatterns = [
    path("", ListShirtsView.as_view()),
    path("<int:id>/", GetUpdateDeleteShirtView.as_view()),
]
