from django.urls import path

from items.views import ListCreateItemView, RetrieveUpdateDestroyItemView, ListFilteredItemsView

urlpatterns = [
    path("", ListCreateItemView.as_view()),
    path("<int:pk>/", RetrieveUpdateDestroyItemView.as_view()),
    path("filter/", ListFilteredItemsView.as_view())
]
