from django.db import migrations


def _upsert_database_skill(Skill, names, canonical_name, order):
  skill = None
  for name in names:
    skill = Skill.objects.filter(name__iexact=name).first()
    if skill:
      break

  if not skill:
    skill = Skill()

  skill.name = canonical_name
  skill.category = "database"
  skill.level = "advanced"
  skill.order = order
  skill.save()


def add_database_skills(apps, schema_editor):
  Skill = apps.get_model("main", "Skill")

  databases = [
    (["MySQL", "Mysql"], "MySQL", 10),
    (["PostgreSQL", "Postgres"], "PostgreSQL", 11),
    (["Chroma DB", "ChromaDB", "Chroma"], "Chroma DB", 12),
    (["Pinecone DB", "PineconeDB", "Pinecone"], "Pinecone DB", 13),
    (["Faiss DB", "FAISS DB", "Faiss", "FAISS"], "Faiss DB", 14),
  ]

  for names, canonical_name, order in databases:
    _upsert_database_skill(Skill, names, canonical_name, order)


class Migration(migrations.Migration):

  dependencies = [("main", "0006_add_development_tools")]

  operations = [migrations.RunPython(add_database_skills, migrations.RunPython.noop)]
