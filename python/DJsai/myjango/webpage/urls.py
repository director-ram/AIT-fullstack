from django.urls import path
from . import views

urlpatterns = [path("",views.home,name="home"),
               path("webpage/login/",views.login,name="login"),
               path("webpage/cart/",views.cart,name="cart"),
               path("webpage/month/<int:month>/",views.month_details_num,name="month_details_num"),
               path("webpage/month/<str:month>/",views.month_details,name="month_details"),
               path("webpage/user/<str:username>/",views.user_display,name="user_display")
               ]