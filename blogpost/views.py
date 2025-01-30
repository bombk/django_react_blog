# from django.shortcuts import render
# from rest_framework import viewsets
# from .serializers import BlogPostSerializer
# from .models import BlogPost

# # Create your views here.

# def index(request):
#     return render(request, 'index.html')


from rest_framework import viewsets
from .models import Post, Carousel
from .serializers import PostSerializer
from django.http import JsonResponse

class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

def carousel_list(request):
    images = Carousel.objects.all()
    data = [{"id": img.id, "title": img.title, "image": request.build_absolute_uri(img.image.url)} for img in images]
    return JsonResponse(data, safe=False)



