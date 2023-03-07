from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView

from order.models import Order
from order.permissions import IsBuyer
from order.serializers import OrderSerializer


class ListCreateOrderView(ListCreateAPIView):
    # queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def get_queryset(self):
        return Order.objects.filter(buyer=self.request.user)

    def perform_create(self, serializer):
        serializer.save(buyer=self.request.user)


class RetrieveUpdateDestroyOrderView(RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    lookup_field = 'id'
    permission_classes = [IsBuyer]


class BookmarkOrderView(GenericAPIView):
    queryset = Order.objects.all()

    def patch(self, request, *args, **kwargs):
        order = self.get_object()
        # get instance
        # check a relation exists
        # create or delete relationship
        pass

