# from django.contrib import admin
# from django.urls import path

# from . import views


# urlpatterns = [
#     path('', views.index, name='index'),
#     # path('about/', views.about, name='about'),
#     # path('contact/', views.contact, name='contact'),
#     # path('dashboard/', views.dashboard, name='dashboard'),
#     # path('signup/', views.signup, name='signup'),
#     # path('login/', views.login, name='login'),
#     # path('logout/', views.logout, name='logout'),
#     # path('post/<int:post_id>', views.post, name='post'),

# ]

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings
from .views import BlogPostViewSet
from .views import *

router = DefaultRouter()
router.register(r'posts', BlogPostViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path("api/carousel/", carousel_list, name="carousel-list"),
    path("api/popular-posts/", popular_posts, name="popular-posts"),
    path('api/posts/<int:post_id>/', post_detail, name='post-detail'),
    path('api/videos/', video_list, name='video-list'),
    path('api/contact/', contact_view, name='contact'),
    path("api/signup/", signup, name="signup"),
    path("api/login/", login_view, name="login"),
    path("api/user-details/", user_details, name="user-details"),
    
      # Single post view
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

