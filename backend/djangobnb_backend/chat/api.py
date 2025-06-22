from django.http import JsonResponse

from rest_framework.decorators import api_view

from .models import Conversation,ConversationMessage
from .serializers import ConversationListSerializer, ConversationDetailSerializer,ConversationMessageSerializer
from rest_framework.generics import RetrieveAPIView,ListAPIView
from useraccount.models import User


class ConversationListView(ListAPIView):
    serializer_class = ConversationListSerializer

    def get_queryset(self):
        return self.request.user.conversations.all()
    
    
class ConversationDetailView(RetrieveAPIView):
    
    def get_object(self):
        
        try:
            pk = self.kwargs['pk']
            return self.request.user.conversations.get(pk = pk)
        except:
            raise Http404("Диалог не найден")
        
    def retrieve(self, request, *args, **kwargs):
        conversation = self.get_object()
        conversation_serializer = ConversationDetailSerializer(conversation)
        messages_serializer = ConversationMessageSerializer(conversation.messages.all(), many=True)
        return JsonResponse({
            'conversation': conversation_serializer.data,
            'messages':messages_serializer.data
        }, safe=False)


class ConversationStartView(ListAPIView):
    def get(self, request, user_id, *args, **kwargs):
        conversation = Conversation.objects.filter(users = request.user).filter(users__id = user_id).distinct()
        if conversation.exists():
            return JsonResponse({'success':True , 'conversation_id':conversation.first().id})
        else:
            user = User.objects.get(pk = user_id)
            conversation = Conversation.objects.create()
            conversation.users.add(request.user)
            conversation.users.add(user)
            return JsonResponse({'success':True , 'conversation_id':conversation.id})