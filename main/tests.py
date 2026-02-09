from django.core import mail
from django.test import TestCase, override_settings
from django.urls import reverse

from .models import ContactFormEntry


class HomePageTests(TestCase):
  def test_home_page_renders(self):
    response = self.client.get(reverse("main:home"))
    self.assertEqual(response.status_code, 200)
    self.assertContains(response, "Django Python Developer at Hased Systems")


class ContactFormTests(TestCase):
  @override_settings(
    EMAIL_BACKEND="django.core.mail.backends.locmem.EmailBackend",
    DEFAULT_FROM_EMAIL="noreply@example.com",
    PORTFOLIO_CONTACT_EMAIL="asimshafique59@gmail.com",
  )
  def test_contact_submit_saves_data_and_sends_email(self):
    payload = {
      "name": "Test User",
      "email": "test@example.com",
      "subject": "Need collaboration",
      "message": "I would like to discuss a backend API project.",
    }

    response = self.client.post(reverse("main:contact_submit"), data=payload)

    self.assertEqual(response.status_code, 302)
    self.assertTrue(ContactFormEntry.objects.filter(email="test@example.com").exists())
    self.assertEqual(len(mail.outbox), 1)

  def test_contact_submit_rejects_invalid_payload(self):
    payload = {
      "name": "",
      "email": "invalid-email",
      "subject": "x",
      "message": "short",
    }

    response = self.client.post(reverse("main:contact_submit"), data=payload)
    self.assertEqual(response.status_code, 400)
    self.assertEqual(ContactFormEntry.objects.count(), 0)
