from .serializers import UserDetailSerializer
from .models import User
from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.generics import RetrieveAPIView,ListCreateAPIView
from property.serializers import ReservationsListSerializer

class LandlordDetailsView(RetrieveAPIView):
    authentication_classes = []
    permission_classes = []
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer

class ReservationListView(ListCreateAPIView):
    serializer_class = ReservationsListSerializer
    
    def get_queryset(self):
        return self.request.user.reservations.all()