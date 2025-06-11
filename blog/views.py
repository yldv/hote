from datetime import datetime
from pyexpat.errors import messages

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.db.models import Q
from django.db.models.fields import return_None
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required

from blog.models import Booking, Room, Contact, Teg, Eprice, About, Service
import requests
@login_required(login_url='/signin/')
def index_view(request):
    rooms = Room.objects.all()
    price = Eprice.objects.all()
    teg = Teg.objects.all()

    d = {'rooms': rooms,
         'price': price,
         'teg': teg,
         }
    return render(request, 'index.html', context=d)




def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = User.objects.filter(username=username)
        if not user:
            return render(request, 'login.html', {'error': 'username tori kirgiz'})

        auth = authenticate(request, username=username, password=password)

        if auth:
            login(request, auth)
            return redirect('/')
        return render(request, 'login.html', {'error': 'Password is incorrect'})
    return render(request, 'login.html')



def logout_view(request):
    logout(request)
    return redirect('/')

def signup_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        if User.objects.filter(username=username).exists():
            return render(request, 'create-account.html', {'error': 'bu user uja bor'})
        user = User.objects.create(username=username, password=make_password(password))
        user.save()
        return redirect('/signin/')
    return render(request, 'create-account.html')




TELEGRAM_BOT_TOKEN = "8139875975:AAEfzca-59QvvuintW_m7R9XRH_HEEDn6EI"
TELEGRAM_CHAT_ID = "7025342701"
BASE_URL = "https://api.telegram.org/bot{}/sendMessage?chat_id={}&text={}"

def send_telegram_message(message):
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    payload = {
        "chat_id": TELEGRAM_CHAT_ID,
        "text": message,
        "parse_mode": "Markdown",
    }
    response = requests.post(url, json=payload)
    return response.json()

@login_required(login_url='/signin/')
def room_view(request):
    rooms = Room.objects.all()
    d = {'rooms': rooms}
    return render(request, 'room-grid.html', d)

@login_required(login_url='/signin/')
def room_detail(request):
    room_id = request.GET.get('rom_id')
    rooms = Room.objects.get(id=room_id)
    room = Room.objects.all().order_by('-id')
    teg = Teg.objects.all
    emessage = None

    if request.method == "POST":
        check_in = request.POST.get("check_in")
        check_out = request.POST.get("check_out")

        try:
            check_in = datetime.strptime(check_in, "%Y-%m-%d").date()
            check_out = datetime.strptime(check_out, "%Y-%m-%d").date()

            booking_t = Booking.objects.filter(
                room_id=rooms.id,
                check_in__lt=check_out,
                check_out__gt=check_in
            )

            if booking_t.exists():
                emessage = "Bu xona ushbu sanalarda band qilingan. Iltimos, boshqa sanalarni tanlang."
            else:
                booking = Booking.objects.create(room_id=room_id, check_in=check_in, check_out=check_out)


                send_telegram_message(f"{rooms.name}   {check_in}   {check_out}")

                return redirect('/')

        except ValueError:
            error_message = "Noto‘g‘ri sana format!"

    return render(request, 'room-detail.html', {'rooms': rooms,'room': room, 'error_message': emessage, 'teg': teg} )

@login_required(login_url='/signin/')
def pricing_view(request):
    price = Eprice.objects.all()
    return render(request, "pricing.html", {"price": price})
@login_required(login_url='/signin/')
def search_view(request):
    query = request.GET.get("query")
    rooms = Room.objects.filter(name__icontains=query) if query else Room.objects.all()
    return render(request, "search.html", {"rooms": rooms, "query": query})

@login_required(login_url='/signin/')
def contact_view(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        number = request.POST.get("number")
        subject = request.POST.get("subject")
        message = request.POST.get("message")

        obj = Contact.objects.create(name=name, email=email, number=number, subject=subject, message=message)
        obj.save()
        res = requests.get(BASE_URL.format(TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID,
                                                    f"name: {name} \nemail: {email} \nnumber: {number} \nsubject:{subject} \nmessage:{message}"))
        return redirect('/contact/')
    return render(request, "contact-us.html")

@login_required(login_url='/signin/')
def room_list(request):
    rooms = Room.objects.all()
    d = {'rooms': rooms}
    return render(request, 'room-list.html', d)
@login_required(login_url='/signin/')
def facilities_view(request):
    rooms = Room.objects.all()
    d = {'rooms': rooms}
    return render(request, 'facilities.html')
@login_required(login_url='/signin/')
def services_view(request):
    services = Service.objects.all()
    d = {
        'services': services,
         }
    return render(request, 'service.html', d)
@login_required(login_url='/signin/')
def about_view(request):
    image = About.objects.all()[:4]
    rooms = Room.objects.all()[:5]
    room = Room.objects.order_by('-price_per_night')[0]
    d = {'image': image, 'rooms': rooms, 'room': room}
    return render(request, 'about.html', d)


@login_required(login_url='/signin/')
def blog_view(request):
    rooms = Room.objects.all()
    d = {'rooms': rooms}
    return render(request, 'blog.html', d)

@login_required(login_url='/signin/')
def blog_detail(request):
    rooms = Room.objects.all()
    d = {'rooms': rooms}
    return render(request, 'blog-details.html', d)



