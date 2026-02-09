from django.db import migrations


def _upsert_tool(Skill, names, canonical_name, order):
  skill = None
  for name in names:
    skill = Skill.objects.filter(name__iexact=name).first()
    if skill:
      break

  if not skill:
    skill = Skill()

  skill.name = canonical_name
  skill.category = "tools"
  skill.level = "advanced"
  skill.order = order
  skill.save()


def add_development_tools(apps, schema_editor):
  Skill = apps.get_model("main", "Skill")

  tools = [
    (["PyCharm", "Pycharm"], "PyCharm", 15),
    (["VS Code", "VScode", "VSCode"], "VS Code", 16),
    (["Cursor", "Curser"], "Cursor", 17),
    (["pgAdmin", "PgAdmin", "PGAdmin"], "pgAdmin", 18),
    (["Postman"], "Postman", 19),
    (["XAMPP", "Xampp"], "XAMPP", 20),
    (["DBeaver", "Dbeaver", "dbevear"], "DBeaver", 21),
  ]

  for names, canonical_name, order in tools:
    _upsert_tool(Skill, names, canonical_name, order)


class Migration(migrations.Migration):

  dependencies = [("main", "0005_update_frontend_backend_skills")]

  operations = [migrations.RunPython(add_development_tools, migrations.RunPython.noop)]
