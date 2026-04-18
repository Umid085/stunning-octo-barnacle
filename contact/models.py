from django.db import models

class UserMessage(models.Model):
    name = models.CharField(max_length=100)
    call = models.CharField(max_length=20, blank=True, default='')
    email = models.EmailField()
    budget = models.IntegerField(null=True, blank=True)
    comment = models.TextField()
    received_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"

