from django.http import HttpResponse, JsonResponse
from django.views import View

from library.models import Book


def hello_fullstackers(request):
    return HttpResponse('<h1>Hello!!</h1>')


class RetrieveBooksView(View):
    def get(self, request, *args, **kwargs):
        books = Book.objects.all().values()
        return JsonResponse(list(books), safe=False)
