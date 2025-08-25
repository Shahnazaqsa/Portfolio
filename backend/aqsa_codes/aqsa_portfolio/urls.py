from django.urls import path
from .views import ProjectView, ProjectDetailVeiw, ContactView

urlpatterns = [
    path("projects/", ProjectView.as_view(), name="project_view"),
    path("projects/<int:pk>/", ProjectDetailVeiw.as_view(), name="project_detail_view"),
    path("contact/", ContactView.as_view(), name="contact_view"),
]
