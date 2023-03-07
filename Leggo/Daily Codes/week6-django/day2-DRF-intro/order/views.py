# from django.views import View
from rest_framework.generics import GenericAPIView
# from rest_framework.views import APIView
#
#
# class DjangoView(View):
#     pass
#
#
# class DRFBasicView(APIView):
#     pass
#
#
# class DRFGenericView(GenericAPIView):
#     pass

# /order
# get all orders
# post/create an order
from rest_framework.response import Response

from order.models import Order
from order.serializers import OrderSerializer, CreateOrderSerializer


class ListCreateOrderView(GenericAPIView):
    # def get_serializer_class(self):
    #     if self.request.method == 'POST':
    #         return CreateOrderSerializer
    #     return OrderSerializer

    def get(self, request, *args, **kwargs):
        orders = Order.objects.filter(buyer=request.user)
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = CreateOrderSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(buyer=request.user)
        return Response(serializer.data)


# /order/order_id
# get, patch, delete single order
class GetUpdateDeleteOrderView(GenericAPIView):
    queryset = Order.objects.all()
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = OrderSerializer(instance)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = CreateOrderSerializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=204)
