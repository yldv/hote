# Generated by Django 5.1.5 on 2025-02-08 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0010_alter_booking_guests'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='guests',
            field=models.IntegerField(choices=[(1, '1 Person'), (2, '2 People'), (3, '3 People'), (4, '4 People'), (5, '5 People')], default=1),
        ),
    ]
