# from django.shortcuts import render
# from rest_framework import viewsets
# from .serializers import BlogPostSerializer
# from .models import BlogPost

# # Create your views here.

# def index(request):
#     return render(request, 'index.html')


from rest_framework import viewsets
from .models import Post, Carousel , Video ,Contact
from .serializers import PostSerializer
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer

    def retrieve(self, request, *args, **kwargs):
        """Override retrieve to increment views count when fetching post"""
        post = self.get_object()
        post.views += 1  # Increment the views count
        post.save()  # Save the updated post
        return super().retrieve(request, *args, **kwargs)

def carousel_list(request):
    images = Carousel.objects.all()
    data = [{"id": img.id, "title": img.title, "image": request.build_absolute_uri(img.image.url)} for img in images]
    return JsonResponse(data, safe=False)



def post_detail(request, post_id):
    # Fetch the post by ID
    post = get_object_or_404(Post, pk=post_id)
    
    # Increment the views count
    post.views += 1
    post.save()

    # Serialize the post data
    serializer = PostSerializer(post)

    # Return the post data
    return Response(serializer.data)
def popular_posts(request):
    posts = Post.objects.all().order_by('-views')[:5]  # Top 5 popular posts
    serializer = PostSerializer(posts, many=True)
    return JsonResponse(serializer.data, safe=False)


def video_list(request):
    video_list=Video.objects.order_by('-created_at')
    return JsonResponse(list(video_list.values()),safe=False)

@csrf_exempt
@api_view(["POST"])
def contact_view(request):
    if request.method == "POST":
        name = request.data.get('name')
        email = request.data.get('email')
        number = request.data.get('number')
        message = request.data.get('message')

        # Save the contact information
        contact = Contact.objects.create(
            name=name,
            email=email,
            number=number,
            message=message
        )

        return JsonResponse({"message": "Contact form submitted successfully!"}, status=200)
    return JsonResponse({"error": "Invalid request"}, status=400)

    return JsonResponse({'success': False}) 

def get_csrf_token(request):
    return JsonResponse({"csrfToken": get_token(request)})


