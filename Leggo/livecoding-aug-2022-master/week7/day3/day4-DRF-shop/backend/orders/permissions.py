from rest_framework.permissions import BasePermission


class IsBuyer(BasePermission):
    def has_object_permission(self, request, view, obj):
        return bool(obj.buyer == request.user)


class IsBuyerOrSuperuser(BasePermission):
    def has_object_permission(self, request, view, obj):
        return bool(request.user.is_superuser or obj.buyer == request.user)
