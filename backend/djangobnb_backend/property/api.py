from django.http import JsonResponse
from rest_framework.response import Response

from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework_simplejwt.tokens import AccessToken
from django.shortcuts import get_object_or_404

from rest_framework.generics import RetrieveAPIView,ListCreateAPIView, CreateAPIView, GenericAPIView
from rest_framework.parsers import MultiPartParser

from .forms import PropertyForm
from .models import Property, Reservation
from .serializers import PropertiesListSerializer , PropertiesDetailSerializer, ReservationsListSerializer, BookCreateSerializer
from useraccount.models import User

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_list(request):
    user = None
    token_header = request.META.get('HTTP_AUTHORIZATION', '')
    
    if token_header:
        try:
            
            token = token_header.split('Bearer ')[1]
            
            
            access_token = AccessToken(token)
            user_id = access_token.payload.get('user_id')  
            
            
            user = User.objects.get(pk=user_id)
        except (IndexError, KeyError, User.DoesNotExist, Exception) as e:
            print(f"Auth error: {str(e)}")
            user = None

    is_favorites = request.GET.get('is_favorites', '')
    landlord_id = request.GET.get('landlord_id', '')
    properties = Property.objects.all()
    
    if landlord_id:
        properties = properties.filter(landlord_id=landlord_id)

    if is_favorites:
        properties = properties.filter(favorited__in = [user])
    
    favorites = []
    if user:
        
        favorites = list(Property.objects.filter(favorited=user).values_list('id', flat=True))

    serializer = PropertiesListSerializer(properties, many=True)
    
    return JsonResponse({
        'data': serializer.data,
        'favorites': favorites  
    })
    
@api_view(['POST', 'FILES'])
def create_property(request):
    form = PropertyForm(request.POST, request.FILES)
    
    if form.is_valid():
        property = form.save(commit=False)
        property.landlord = request.user
        property.save()
        
        return JsonResponse({'success':True})
    else:
        print('error', form.errors, form.non_field_errors)
        return JsonResponse({'errors': form.errors.as_json()}, status = 400)
    
    
class PropertyDetailView(RetrieveAPIView):
    authentication_classes = []
    permission_classes = []
    queryset = Property.objects.all()
    serializer_class = PropertiesDetailSerializer
    

class PropertyReservationsView(ListCreateAPIView):
    authentication_classes = []
    permission_classes = []
    serializer_class = ReservationsListSerializer 
    
    def get_queryset(self):
        property = get_object_or_404(Property, pk = self.kwargs['pk'])
        return property.reservations.all()
        
    
class BookPropertyCreateView(CreateAPIView):
    serializer_class = BookCreateSerializer
    
    def perform_create(self, serializer):
        property_id = self.kwargs.get('pk')
        property = get_object_or_404(Property, pk=property_id)
        
        serializer.save(
            property=property,
        )
    

class ToggleFavoriteView(GenericAPIView):
    queryset = Property.objects.all()
    
    def post(self, request, *args, **kwargs):
        property = self.get_object()
        user = request.user
        is_favorite = property.favorited.filter(id = user.id).exists()
        if is_favorite:
            property.favorited.remove(user)
        else:
            property.favorited.add(user)
    
        return Response({'is_favorite': not is_favorite})