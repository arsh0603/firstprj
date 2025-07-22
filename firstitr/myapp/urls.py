from django.urls import path
from .views import FetchDetailsView

urlpatterns = [
    path('fetch-details/', FetchDetailsView.as_view(), name='fetch_details'),
]
