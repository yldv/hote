# Generated by Django 5.1.5 on 2025-02-08 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0012_teg'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='teg',
            field=models.ManyToManyField(related_name='rooms', to='blog.teg'),
        ),
    ]
