from django.conf import settings
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin

from wagtail.wagtailadmin import urls as wagtailadmin_urls
from wagtail.wagtailcore import urls as wagtail_urls


urlpatterns = [
    # django
    url(r'^django-admin/', admin.site.urls),

    # wagtail
    url(r'^admin/', include(wagtailadmin_urls)),
    url(r'', include(wagtail_urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
