import json

from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404
from django.views import View
from django.forms.models import model_to_dict

from shirt.models import Shirt


class ListShirtsView(View):
    def get(self, request, *args, **kwargs):
        # shirts = Shirt.objects.all()
        # formatted_shirts = []
        # for shirt in shirts:
        #     formatted_shirts.append({
        #         "size": shirt["size"],
        #         "color": shirt["color"],
        #     })
        shirts = Shirt.objects.all().values('id', 'color', 'size', 'price')
        # shirts = Shirt.objects.all().values()
        return JsonResponse(list(shirts), safe=False)

    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        Shirt.objects.create(**data)
        return HttpResponse(status=200)


class GetUpdateDeleteShirtView(View):
    def get(self, request, *args, **kwargs):
        # shirt = Shirt.objects.filter(id=kwargs['id']).values()[0]

        # try:
        #     shirt = Shirt.objects.get(id=kwargs['id'])
        #     return JsonResponse(model_to_dict(shirt))
        # except Shirt.DoesNotExist:
        #     return HttpResponse(status=404)

        shirt = get_object_or_404(Shirt, pk=kwargs['id'])
        return JsonResponse(model_to_dict(shirt))

    def patch(self, request, *args, **kwargs):
        shirt = get_object_or_404(Shirt, pk=kwargs['id'])
        data = json.loads(request.body)
        shirt.color = data['color']
        shirt.size = data['size']
        shirt.save()
        return HttpResponse(status=200)

    def delete(self, request, *args, **kwargs):
        shirt = get_object_or_404(Shirt, pk=kwargs['id'])
        shirt.delete()
        return HttpResponse(status=204)
