from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from item.models import Item
from item.serializers import ItemSerializer, CreateItemSerializer


class ListCreateItemView(GenericAPIView):
    queryset = Item.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CreateItemSerializer
        return ItemSerializer

    def get(self, request, *args, **kwargs):
        items = self.get_queryset()
        serializer = self.get_serializer(items, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class GetUpdateDeleteItemView(GenericAPIView):
    queryset = Item.objects.all()

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = ItemSerializer(instance)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = ItemSerializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=204)
