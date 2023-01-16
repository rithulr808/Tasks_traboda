from django.db import models


class Pokemon(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    height = models.IntegerField(blank=True, null=True)
    weight = models.IntegerField(blank=True, null=True)
    species = models.CharField(max_length=255, blank=True, null=True)
    types = models.JSONField(max_length=255, blank=True, null=True)
    abilities = models.JSONField(max_length=255, blank=True, null=True)
    base_experience = models.IntegerField(blank=True, null=True)
    order = models.IntegerField(blank=True, null=True)
    stats = models.JSONField(max_length=255, blank=True, null=True)
    moves = models.JSONField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self
