from rest_framework import generics, permissions
from .serializers import ContactSerializer, ProjectSerializer
from .models import Project, Contact
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.


class ProjectView(generics.ListCreateAPIView):
    queryset = Project.objects.all().order_by("date_posted")
    serializer_class = ProjectSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]


class ProjectDetailVeiw(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAdminUser()]


class ContactView(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def get_permissions(self):
        if self.request.method == "GET":
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]

    def perform_create(self, serializer):
        contact = serializer.save()
        send_mail(
            subject=f"New Message From {contact.name}",
            message=f"Name: {contact.name}\nEmail: {contact.email}\n\nMessage:\n{contact.message}",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.EMAIL_HOST_USER],
            fail_silently=False,
        )
