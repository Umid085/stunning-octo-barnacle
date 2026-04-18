from django.shortcuts import render, redirect
from contact.forms import UserMessageForm


def index(request):
    if request.method == "POST":
        form = UserMessageForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    return render(request, 'index.html')