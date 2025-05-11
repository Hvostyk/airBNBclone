from django.http import JsonResponse

from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework_simplejwt.tokens import AccessToken
from .forms import PropertyForm
from .models import Property, Reservation
from .serializers import PropertiesListSerializer , PropertiesDetailSerializer, ReservationsListSerializer
from useraccount.models import User

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_list(request):
    user = None
    token_header = request.META.get('HTTP_AUTHORIZATION', '')
    
    if token_header:
        try:
            # Извлекаем токен из заголовка
            token = token_header.split('Bearer ')[1]
            
            # Декодируем токен
            access_token = AccessToken(token)
            user_id = access_token.payload.get('user_id')  # Используйте правильный ключ из payload
            
            # Получаем пользователя
            user = User.objects.get(pk=user_id)
        except (IndexError, KeyError, User.DoesNotExist, Exception) as e:
            print(f"Auth error: {str(e)}")
            user = None

    # Фильтрация по landlord_id
    landlord_id = request.GET.get('landlord_id', '')
    properties = Property.objects.all()
    
    if landlord_id:
        properties = properties.filter(landlord_id=landlord_id)

    # Проверка избранного
    favorites = []
    if user:
        # Оптимизированный запрос для проверки избранного
        favorites = list(Property.objects.filter(favorited=user).values_list('id', flat=True))

    serializer = PropertiesListSerializer(properties, many=True)
    
    return JsonResponse({
        'data': serializer.data,
        'favorites': favorites  # Добавьте favorites в ответ, если нужно
    })
    
    
@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_detail(request, pk):
    property = Property.objects.get(pk=pk)
    
    serializer = PropertiesDetailSerializer(property, many= False)
    
    return JsonResponse(serializer.data)
    
    
@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def property_reservations(request, pk):
    property = Property.objects.get(pk=pk)
    reservations = property.reservations.all()
    serializer = ReservationsListSerializer(reservations, many = True)
    return JsonResponse(serializer.data, safe = False)
        
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
    
@api_view(['POST'])
def book_property(request,pk):
    try:
        start_date = request.POST.get('start_date', '')
        end_date = request.POST.get('end_date', '')
        number_of_nights = request.POST.get('number_of_nights', '')
        total_price = request.POST.get('total_price', '')
        guests = request.POST.get('guests', '')
        
        property = Property.objects.get(pk = pk)
        
        Reservation.objects.create(
            property=property,
            start_date = start_date,
            end_date = end_date,
            number_of_nights = number_of_nights,
            total_price = total_price,
            guests = guests,
            created_by = request.user,
        )
        return JsonResponse({'success': True})
    except Exception as e:
        print('Error',e)
        
        return JsonResponse({'success':False})
    
@api_view(['POST'])
def toggle_favorite(request,pk):
    property = Property.objects.get(pk = pk)
    
    if request.user in property.favorited.all():
        property.favorited.remove(request.user)
        
        return JsonResponse({'is_favorite':False})
    else:
        property.favorited.add(request.user)
        return JsonResponse({'is_favorite':True})