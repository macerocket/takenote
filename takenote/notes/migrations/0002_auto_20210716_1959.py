# Generated by Django 3.2.5 on 2021-07-16 18:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ActionItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item', models.TextField()),
                ('who', models.TextField()),
                ('done', models.BooleanField(default=False)),
                ('due_by', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AddField(
            model_name='note',
            name='private',
            field=models.BooleanField(default=False),
        ),
    ]
