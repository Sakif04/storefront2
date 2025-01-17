from django.shortcuts import get_object_or_404
from django.http import Http404, HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Product
from .serializers import ProductSerializer


# Create your views here.
@api_view()
def product_list(request):
    queryset=Product.objects.all()
    serializer=ProductSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view()
def product_detail(request, id):
    product=get_object_or_404(Product, pk=id)
    serializer=ProductSerializer(product)
    return Response(serializer.data)
