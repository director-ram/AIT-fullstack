from unicodedata import name

from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect,HttpResponseNotFound,HttpResponseServerError

# Create your views here.

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
challanges = {
    "jan":"New Year's Resolution",
    "feb":"Valentine's Day",
    "mar":"St. Patrick's Day",
    "apr":"April Fools' Day",
    "may":"Memorial Day",
    "jun":"Father's Day",
    "jul":"Back to School",
    "aug":"Independence Day",
    "sep":"Labor Day",
    "oct":"Halloween",
    "nov":"Thanksgiving",
    "dec":"Christmas"
}

authors = {
    "maya_angelou": {
        "name": "Maya Angelou",
        "details": "An American poet, memoirist, and civil rights activist known for her vivid, powerful storytelling.",
        "books": ["I Know Why the Caged Bird Sings", "Gather Together in My Name", "The Heart of a Woman"]
    },
    "george_orwell": {
        "name": "George Orwell",
        "details": "An English novelist and essayist whose work explored truth, power, language, and political freedom.",
        "books": ["1984", "Animal Farm", "Homage to Catalonia"]
    },
    "toni_morrison": {
        "name": "Toni Morrison",
        "details": "An American novelist and editor celebrated for lyrical fiction about memory, identity, and community.",
        "books": ["Beloved", "Song of Solomon", "The Bluest Eye"]
    }
}

def home(request):
    return render(request,"home.html",{"months":months})

def authors_view(request):
    return render(request, "authors.html", {"authors": authors})

def author_detail(request, author_id):
    author = authors.get(author_id)
    if author is None:
        return HttpResponseNotFound("<h2>Author not found</h2>")
    return render(request, "author_detail.html", {"author": author})

# def login(request):
#     return HttpResponse('<h2>Login</h2>' \
#     '<p style="color: red;background-color: lightyellow;">Fill the login details</p>')

# def cart(request):
#     return HttpResponse('<h2>Cart</h2>'\
#                         '<p style="color: green;background-color: lightblue;">Your cart is empty</p>')




def month_details_num(request,month):
    if month > 12:
        return HttpResponseNotFound("<h2>Invalid month</h2>")
    else:
        month_name = list(months.keys())
        selected_month = months[month_name[month-1]]
        # print(f"Month details for {month} is {selected_month}")
        return HttpResponseRedirect(f"/webpage/month/{selected_month}/")
        # return render(request,"month.html",{"month":selected_month})

def month_details(request,month):
    selected_month = month
    # return HttpResponse(f'<h2>Month details</h2>' \
    #                     f'<p style="color: purple;background-color: lightgray;">This is a {month}</p>')

    challenge = challanges.get(selected_month[:3].lower(), "No challenge available")
    return render(request,"months.html",{"month":selected_month,"challanges":challenge})


def user_display(request,username):
    return render(request,"user.html",{"username":username})
