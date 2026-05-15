from django.http import JsonResponse
from .models import Product

def get_products(request):
    products = Product.objects.all()

    product_list = []

    for product in products:
        product_list.append({
            "id": product.id,
            "name": product.product_name,
            "price": product.product_price,
            "description": product.product_description,
            "image": product.product_image.url if product.product_image else ""
        })

    return JsonResponse(product_list, safe=False)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import RegisterSerializer


@api_view(['POST'])
def register_user(request):

    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        return Response({
            'message': 'User Registered Successfully'
        })

    return Response(serializer.errors)

from django.contrib.auth import authenticate

@api_view(['POST'])
def login_user(request):

    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)

    if user is not None:
        return Response({
            'message': 'Login Success'
        })

    return Response({
        'error': 'Invalid Username or Password'
    })