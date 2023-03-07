from django.urls import path

from order.views import ListCreateOrderView, GetUpdateDeleteOrderView

urlpatterns = [
    path("", ListCreateOrderView.as_view()),
    path("<int:id>/", GetUpdateDeleteOrderView.as_view()),
]
