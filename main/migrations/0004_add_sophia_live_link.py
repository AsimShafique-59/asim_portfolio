from django.db import migrations


SOPHIA_LIVE_URL = "https://sophiamainbot-asim.streamlit.app/"


def add_sophia_live_link(apps, schema_editor):
  Project = apps.get_model("main", "Project")
  Project.objects.filter(title__icontains="Sophia Bot").update(live_url=SOPHIA_LIVE_URL)


def remove_sophia_live_link(apps, schema_editor):
  Project = apps.get_model("main", "Project")
  Project.objects.filter(live_url=SOPHIA_LIVE_URL).update(live_url="")


class Migration(migrations.Migration):

  dependencies = [("main", "0003_update_experience_for_hased_systems")]

  operations = [migrations.RunPython(add_sophia_live_link, remove_sophia_live_link)]
