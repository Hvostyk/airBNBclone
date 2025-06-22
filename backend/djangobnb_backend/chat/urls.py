from django.urls import path

from . import api

urlpatterns = [
    path('',api.ConversationListView.as_view() ,name='api_conversations_list'),
    path('start/<uuid:user_id>/', api.ConversationStartView.as_view(), name='api_conversations_start'),
    path('<uuid:pk>/', api.ConversationDetailView.as_view(), name='api_conversations_detail'),
]
