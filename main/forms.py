from django import forms

from .models import ContactFormEntry


class ContactForm(forms.ModelForm):
  class Meta:
    model = ContactFormEntry
    fields = ["name", "email", "subject", "message"]
    widgets = {
      "name": forms.TextInput(
        attrs={
          "class": "form-control",
          "placeholder": "Your full name",
        }
      ),
      "email": forms.EmailInput(
        attrs={
          "class": "form-control",
          "placeholder": "you@example.com",
        }
      ),
      "subject": forms.TextInput(
        attrs={
          "class": "form-control",
          "placeholder": "Project inquiry",
        }
      ),
      "message": forms.Textarea(
        attrs={
          "class": "form-control",
          "rows": 4,
          "placeholder": "Tell me about your project or collaboration idea...",
        }
      ),
    }

  def clean_subject(self):
    value = self.cleaned_data["subject"].strip()
    if len(value) < 3:
      raise forms.ValidationError("Subject must be at least 3 characters long.")
    return value

  def clean_message(self):
    value = self.cleaned_data["message"].strip()
    if len(value) < 10:
      raise forms.ValidationError("Message must be at least 10 characters long.")
    return value
