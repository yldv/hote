from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import Room, Booking, Teg, Eprice, Contact, About, Service

admin.site.register(Room)

admin.site.register(Booking)

admin.site.register(Teg)

admin.site.register(Eprice)

admin.site.register(Contact)

admin.site.register(About)

admin.site.register(Service)