from django.urls import path

from orders.views import ListCreateOrderView, RetrieveUpdateDestroyOrderView

urlpatterns = [
    path("", ListCreateOrderView.as_view()),
    path("<int:id>/", RetrieveUpdateDestroyOrderView.as_view()),
]
