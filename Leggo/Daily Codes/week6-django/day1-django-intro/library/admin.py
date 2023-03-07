from django.contrib import admin

from library.models import Book


class BookAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'price']
    search_fields = ['title', 'author']
    list_filter = ['author']


admin.site.register(Book, BookAdmin)
