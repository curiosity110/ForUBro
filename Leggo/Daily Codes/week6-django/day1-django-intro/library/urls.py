from django.urls import path

from library.views import RetrieveBooksView

urlpatterns = [
    path("", RetrieveBooksView.as_view()),
    # path("create/", hello_fullstackers),
]
