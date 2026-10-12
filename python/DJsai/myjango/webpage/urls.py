from django.urls import path
from . import views

urlpatterns = [path("",views.home,name="home"),
               path("webpage/authors/",views.authors_view,name="authors"),
               path("webpage/authors/<slug:author_id>/",views.author_detail,name="author_detail"),
               path("webpage/month/<int:month>/",views.month_details_num,name="month_details_num"),
               path("webpage/month/<str:month>/",views.month_details,name="month_details"),
               path("webpage/user/<str:username>/",views.user_display,name="user_display"),
               path("webpage/products/",views.products_view,name="products"),
               ]