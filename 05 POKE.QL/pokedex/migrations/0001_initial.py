# Generated by Django 4.1.5 on 2023-01-16 04:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Pokemon",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(blank=True, max_length=255, null=True)),
                ("height", models.IntegerField(blank=True, null=True)),
                ("weight", models.IntegerField(blank=True, null=True)),
                ("species", models.CharField(blank=True, max_length=255, null=True)),
                ("types", models.JSONField(blank=True, max_length=255, null=True)),
                ("abilities", models.JSONField(blank=True, max_length=255, null=True)),
                ("base_experience", models.IntegerField(blank=True, null=True)),
                ("order", models.IntegerField(blank=True, null=True)),
                ("stats", models.JSONField(blank=True, max_length=255, null=True)),
                ("moves", models.JSONField(blank=True, max_length=255, null=True)),
            ],
        ),
    ]
