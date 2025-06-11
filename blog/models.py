from typing import Any

from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class Teg(models.Model):
    name = models.CharField(max_length=30)
    room = models.ForeignKey('Room', on_delete=models.CASCADE, related_name='tegs')
    image = models.ImageField(upload_to='images/')
    def __str__(self):
        return self.name



class Room(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    bedrooms = models.IntegerField(blank=True, null=True)
    bathrooms = models.IntegerField(blank=True, null=True)
    balcony = models.BooleanField(default=False)
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='room_images/', blank=True, null=True)
    teg = models.ManyToManyField(Teg, related_name="rooms")

    def __str__(self):
        return f"{self.name} - ${self.price_per_night}"





class Booking(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE, related_name='bookings')
    check_in = models.DateField()
    check_out = models.DateField()

    def __str__(self):
        return f"Booking for {self.room.name} from {self.check_in} to {self.check_out}"

    def is_available(self):
        booking = Booking.objects.filter(
            room=self.room,
            check_in__lt=self.check_out,
            check_out__gt=self.check_in,
        ).exclude(id=self.id)

        return not booking.exists()





class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    number = models.IntegerField()
    subject = models.CharField(max_length=100)
    message = models.TextField()
    def __str__(self):
        return f"{self.name} - {self.email}"




class Eprice(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    image = models.ImageField(upload_to="room_images/", blank=True, null=True)

    def __str__(self):
        return self.name


class About(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='room_images/', blank=True, null=True)
    position = models.CharField(max_length=255)
    def __str__(self):
        return self.name


class Service(models.Model):
    r_name = models.CharField(max_length=255)
    r_image = models.ImageField(upload_to='room_images/', blank=True, null=True)
    r_image2 = models.ImageField(upload_to='room_images/', blank=True, null=True)

    s_name = models.CharField(max_length=255)
    s_image = models.ImageField(upload_to='room_images/', blank=True, null=True)
    s_image2 = models.ImageField(upload_to='room_images/', blank=True, null=True)

    m_name = models.CharField(max_length=255)
    m_image = models.ImageField(upload_to='room_images/', blank=True, null=True)
    m_image2 = models.ImageField(upload_to='room_images/', blank=True, null=True)

    f_name = models.CharField(max_length=255)
    f_image = models.ImageField(upload_to='room_images/', blank=True, null=True)
    f_image2 = models.ImageField(upload_to='room_images/', blank=True, null=True)

    def __str__(self):
        return f"{self.f_name}-{self.m_name}-{self.s_name}-{self.r_name}"
