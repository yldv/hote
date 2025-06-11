from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from django.views.static import serve

from .views import index_view, signup_view, room_view, room_detail, \
    pricing_view, search_view, contact_view, room_list, facilities_view, services_view, login_view, logout_view, about_view, blog_view, blog_detail


urlpatterns = [
    path('', index_view),
    path('signin/', login_view),
    path('signup/', signup_view),
    path('room/', room_view),
    path('room_d/', room_detail),
    path("pricing/", pricing_view),
    path("search/", search_view),
    path("contact/", contact_view),
    path("room_list/", room_list),
    path("facilities/", facilities_view),
    path("services/", services_view),
    path("logout/", logout_view),
    path("about/", about_view),
    path("blog/", blog_view),
    path("blog_d/", blog_detail),
    ]

