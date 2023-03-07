from django.db.models import Q, F
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.permissions import IsAdminUser

from items.models import Item
from items.permissions import ReadOnly
from items.serializers import ItemSerializer, StaffItemSerializer


class ListCreateItemView(ListCreateAPIView):
    """
    get:
    title get

    **description get**

    post:
    title post

    *description post*

    ## subtitle
    """
    permission_classes = [IsAdminUser | ReadOnly]

    def get_filters(self, query_params):
        fields = ['brand', 'size', 'type', 'color']
        filters = {}
        for item in query_params:
            if item in fields:
                filters[f'{item}__icontains'] = query_params[item]
        return filters

    def get_queryset(self):
        queryset = Item.objects.all()
        if self.request.query_params:
            filters = self.get_filters(self.request.query_params)
            queryset = queryset.filter(**filters)
        # if self.request.query_params.get('brand'):
        #     queryset = queryset.filter(brand__istarts=self.request.query_params.get('brand'))
        return queryset

    def get_serializer_class(self):
        if self.request.user.is_staff:
            return StaffItemSerializer
        return ItemSerializer


class RetrieveUpdateDestroyItemView(RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [IsAdminUser | ReadOnly]


class ListFilteredItemsView(ListAPIView):
    serializer_class = StaffItemSerializer
    # serializer_class = OrderSerializer
    # serializer_class = RegProfileSerializer

    def get_queryset(self):
        # queryset = Item.objects.filter(orders__buyer__username='ruben')
        # queryset = Order.objects.filter(buyer__reg_profile__aware_from='online_ad')
        # retrieve all registration profiles that have ordered item id 5
        # queryset = RegistrationProfile.objects.filter(user__orders__items=5).distinct()

        # queryset = Item.objects.filter(brand__iexact='nike', size='m') # AND condition
        # queryset = Item.objects.filter(Q(brand__iexact='nike') | Q(size='m'))  # OR condition
        # queryset = Item.objects.filter(Q(brand__iexact='nike') | Q(size='m'))  # OR condition
        # queryset = Item.objects.filter(Q(brand__iexact='nike') | Q(size='m'), price__lt=40)  # OR + AND condition
        # queryset = Item.objects.filter(price__lte=F('cost'))  # Compare 2 fields of same instance
        queryset = Item.objects.filter(price__lte=F('cost'))  # Compare 2 fields of same instance
        return queryset
