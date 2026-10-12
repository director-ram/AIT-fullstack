from django.contrib import admin
from .models import Authors, Products
# Register your models here.
# admin.site.register(Authors)
admin.site.site_header = "Myjango Admin"
admin.site.site_title = "Myjango Admin Portal"
admin.site.index_title = "Welcome to the Myjango Admin Portal"
@admin.register(Authors)
class AuthorsAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'bio')
    list_display_links = ('name','email')
    search_fields = ('name', 'email')
    ordering = ('name',)

    fieldsets = (("Authors Information", {'fields': ('name', 'email', 'bio')}),)


@admin.register(Products)
class ProductsAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'description')
    list_display_links = ('title',)
    search_fields = ('title',)
    ordering = ('title',)

    fieldsets = (("Products Information", {'fields': ('title', 'price', 'description')}),)