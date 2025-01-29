# from django.shortcuts import render
# from rest_framework import viewsets
# from .serializers import BlogPostSerializer
# from .models import BlogPost

# # Create your views here.

# def index(request):
#     return render(request, 'index.html')


from rest_framework import viewsets
from .models import BlogPost
from .serializers import BlogPostSerializer

class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

