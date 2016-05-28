from django.db import models
from django.utils.translation import ugettext as _

from wagtail.contrib.settings.models import BaseSetting, register_setting
from wagtail.wagtailadmin.edit_handlers import FieldPanel, MultiFieldPanel


@register_setting
class WebsiteSettings(BaseSetting):
    vat = models.CharField(max_length=16, help_text=_('Your company VAT with initial state code (i.e.: GB)'))
    phone = models.CharField(max_length=16, help_text=_('Your company phone number'))
    email = models.EmailField(max_length=255, help_text=_('Your company email address'))

    facebook = models.URLField(help_text=_('Your Facebook page URL'))
    instagram = models.URLField(help_text=_('Your Instagram page URL'))
    pinterest = models.URLField(help_text=_('Your Pinterest page URL'))

    panels = [
        MultiFieldPanel(
            [
                FieldPanel('vat'),
                FieldPanel('phone'),
                FieldPanel('email'),
            ],
            heading=_('Company information'),
            classname='collapsible',
        ),
        MultiFieldPanel(
            [
                FieldPanel('facebook'),
                FieldPanel('instagram'),
                FieldPanel('pinterest'),
            ],
            heading=_('Social media'),
            classname='collapsible',
        ),
    ]


@register_setting
class AnalyticsSettings(BaseSetting):
    google_analytics = models.CharField(max_length=15, help_text=_('Google Analytics tracking ID'))
