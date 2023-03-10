"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from rest_framework_simplejwt import views
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from project import settings

schema_view = get_schema_view(
   openapi.Info(
      title="Django API",
      default_version='v1',
      description="Description of your Django App",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="learn@propulsionacademy.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,  # Set to False restrict access to protected endpoints
   permission_classes=[permissions.AllowAny],  # Permissions for docs access
)

urlpatterns = [
    path("backend/admin/", admin.site.urls),

    path("backend/items/", include('items.urls')),
    path("backend/orders/", include('orders.urls')),

    # JWT
    path('backend/token/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/token/refresh/', views.TokenRefreshView.as_view(), name='token_refresh'),
    path('backend/token/verify/', views.TokenVerifyView.as_view(), name='token_refresh'),

    # Docs
    path('backend/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
