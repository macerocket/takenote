# Generated by Django 3.2.5 on 2021-07-17 00:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0004_rename_private_note_private_flag'),
    ]

    operations = [
        migrations.AddField(
            model_name='actionitem',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='note',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
