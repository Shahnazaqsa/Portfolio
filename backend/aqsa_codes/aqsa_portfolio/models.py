from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=100)
    linkdIn = models.URLField()
    github = models.URLField()
    project_link = models.URLField()
    image = models.ImageField(upload_to="projects/")
    date_posted = models.DateField(auto_now_add=True)


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
