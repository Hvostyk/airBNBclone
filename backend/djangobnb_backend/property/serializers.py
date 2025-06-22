from rest_framework import serializers

from .models import Property,Reservation

from useraccount.serializers import UserDetailSerializer

class PropertiesListSerializer(serializers.ModelSerializer):
    class Meta:
        model= Property
        fields= (
            'id',
            'title',
            'price_per_night',
            'image_url',
        )
    
    def validate_price_per_night(self, value):
        if (value < 0):
            raise serializers.ValidationError("price_per_night less than zero!")
        
        return value
        
class PropertiesDetailSerializer(serializers.ModelSerializer):
    landlord = UserDetailSerializer(read_only = True, many=False)
    class Meta(PropertiesListSerializer.Meta):
        model = Property
        fields= PropertiesListSerializer.Meta.fields + (
            'bedrooms',
            'bathrooms',
            'guests',
            'landlord',
        )
        
class ReservationsListSerializer(serializers.ModelSerializer):
    property = PropertiesListSerializer(read_only = True, many = False )
    class Meta:
        model = Reservation
        fields= (
            'id',
            'start_date',
            'end_date',
            'number_of_nights',
            'total_price',
            'property',
        )
        
    def validate_total_price(self, value):
        if (value < 0):
            raise serializers.ValidationError("total price less than zero!")
        
        return value
    
    
class BookCreateSerializer(serializers.ModelSerializer):
    property = PropertiesDetailSerializer(read_only = True, many = False)
    created_by = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )
    class Meta:
        model = Reservation
        fields = ['property','start_date', 'end_date','number_of_nights','total_price','guests','created_by']
        read_only_fields = ['property']