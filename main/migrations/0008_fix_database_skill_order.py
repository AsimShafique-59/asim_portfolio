from django.db import migrations


def fix_database_order(apps, schema_editor):
  Skill = apps.get_model("main", "Skill")

  order_map = {
    "MySQL": 10,
    "PostgreSQL": 11,
    "Chroma DB": 12,
    "Pinecone DB": 13,
    "Faiss DB": 14,
    "MongoDB": 15,
  }

  for name, order in order_map.items():
    Skill.objects.filter(name__iexact=name).update(
      category="database",
      level="advanced",
      order=order,
    )


class Migration(migrations.Migration):

  dependencies = [("main", "0007_add_database_skills")]

  operations = [migrations.RunPython(fix_database_order, migrations.RunPython.noop)]
