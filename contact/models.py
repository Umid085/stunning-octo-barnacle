from django.db import models

# Create your models here.
class UserMessage(models.Model):    
    name = models.ChartField(max_length=100)
    email = models.EmailField()
    message = models.TestField()
    received_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"

