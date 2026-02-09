from datetime import date

from django.db import migrations


def set_updated_experience(apps, schema_editor):
  Experience = apps.get_model("main", "Experience")

  web_excels_qs = Experience.objects.filter(company__iexact="Web Excels")
  for exp in web_excels_qs:
    exp.end_date = date(2026, 1, 31)
    exp.is_current = False
    exp.save(update_fields=["end_date", "is_current"])

  hased_exp, created = Experience.objects.get_or_create(
    company="Hased Systems",
    title="Django Python Developer",
    defaults={
      "location": "Lahore, Pakistan",
      "start_date": date(2026, 2, 1),
      "end_date": None,
      "is_current": True,
      "description": (
        "Building and maintaining backend services using Django and Django REST "
        "Framework, with a focus on scalable APIs and production reliability."
      ),
      "highlights": (
        "Developing backend modules and API endpoints for business workflows.\n"
        "Improving performance and maintainability of existing Django services.\n"
        "Collaborating with team members to deliver production-ready features."
      ),
      "tech_stack": "Python, Django, Django REST Framework, PostgreSQL, Git",
      "order": 0,
    },
  )

  if not created:
    hased_exp.location = hased_exp.location or "Lahore, Pakistan"
    hased_exp.start_date = hased_exp.start_date or date(2026, 2, 1)
    hased_exp.end_date = None
    hased_exp.is_current = True
    hased_exp.order = 0
    hased_exp.save(
      update_fields=["location", "start_date", "end_date", "is_current", "order"]
    )

  Experience.objects.exclude(pk=hased_exp.pk).update(is_current=False)


def revert_experience_update(apps, schema_editor):
  Experience = apps.get_model("main", "Experience")

  Experience.objects.filter(company__iexact="Hased Systems").delete()

  web_excels_qs = Experience.objects.filter(company__iexact="Web Excels")
  for exp in web_excels_qs:
    exp.end_date = None
    exp.is_current = True
    exp.save(update_fields=["end_date", "is_current"])


class Migration(migrations.Migration):

  dependencies = [("main", "0002_seed_portfolio_data")]

  operations = [migrations.RunPython(set_updated_experience, revert_experience_update)]
