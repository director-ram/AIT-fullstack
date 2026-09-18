from unicodedata import name

from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect,HttpResponseNotFound,HttpResponseServerError

# Create your views here.


def home(request):
    return HttpResponse('<h1>Hello world!!</h1> \
    <p style="color: blue;background-color: lightgray;">Welcome to my first Django project</p>')

def login(request):
    return HttpResponse('<h2>Login</h2>' \
    '<p style="color: red;background-color: lightyellow;">Fill the login details</p>')

def cart(request):
    return HttpResponse('<h2>Cart</h2>'\
                        '<p style="color: green;background-color: lightblue;">Your cart is empty</p>')


months = {
    "jan":"January",
    "feb":"February",
    "mar":"March",
    "apr":"April",
    "may":"May",
    "jun":"June",
    "jul":"July",
    "aug":"August",
    "sep":"September",
    "oct":"October",
    "nov":"November",
    "dec":"December"
}

def month_details_num(request,month):
    if month > 12:
        return HttpResponseNotFound("<h2>Invalid month</h2>")
    else:
        month_name = list(months.keys())
        selected_month = months[month_name[month-1]]
        # print(f"Month details for {month} is {selected_month}")
        return HttpResponseRedirect(f"/webpage/month/{selected_month}/")

def month_details(request,month):
    # selected_month = month
    return HttpResponse(f'<h2>Month details</h2>' \
                        f'<p style="color: purple;background-color: lightgray;">This is a {month}</p>')

def user_display(request,username):
    return render(request,"user.html",{"username":username})