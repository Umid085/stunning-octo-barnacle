from django.contrib import admin
from .models import UserMessage


@admin.register(UserMessage)
class UserMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'call', 'budget', 'received_at')
    search_fields = ('name', 'email')
    readonly_fields = ('received_at',)