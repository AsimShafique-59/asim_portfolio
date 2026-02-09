from django.db import migrations


def _get_skill_by_names(Skill, names):
  for name in names:
    skill = Skill.objects.filter(name__iexact=name).first()
    if skill:
      return skill
  return None


def _upsert_skill(Skill, *, names, canonical_name, category, level, order):
  skill = _get_skill_by_names(Skill, names)
  if not skill:
    skill = Skill()
  skill.name = canonical_name
  skill.category = category
  skill.level = level
  skill.order = order
  skill.save()


def set_skills(apps, schema_editor):
  Skill = apps.get_model("main", "Skill")

  desired_skills = [
    {
      "names": ["HTML"],
      "canonical_name": "HTML",
      "category": "frontend",
      "level": "advanced",
      "order": 1,
    },
    {
      "names": ["CSS"],
      "canonical_name": "CSS",
      "category": "frontend",
      "level": "advanced",
      "order": 2,
    },
    {
      "names": ["JavaScript", "Javascript", "JS"],
      "canonical_name": "JavaScript",
      "category": "frontend",
      "level": "advanced",
      "order": 3,
    },
    {
      "names": ["React.js", "React JS", "React"],
      "canonical_name": "React.js",
      "category": "frontend",
      "level": "advanced",
      "order": 4,
    },
    {
      "names": ["TypeScript", "Typescript"],
      "canonical_name": "TypeScript",
      "category": "backend",
      "level": "advanced",
      "order": 5,
    },
    {
      "names": ["Node.js", "NodeJS", "Node.js (Backend)", "Node"],
      "canonical_name": "Node.js",
      "category": "backend",
      "level": "advanced",
      "order": 6,
    },
    {
      "names": ["Python"],
      "canonical_name": "Python",
      "category": "backend",
      "level": "expert",
      "order": 7,
    },
    {
      "names": ["Django"],
      "canonical_name": "Django",
      "category": "backend",
      "level": "expert",
      "order": 8,
    },
    {
      "names": ["DRF", "Django REST Framework"],
      "canonical_name": "DRF",
      "category": "backend",
      "level": "expert",
      "order": 9,
    },
    {
      "names": ["FastAPI", "Fast API"],
      "canonical_name": "FastAPI",
      "category": "backend",
      "level": "advanced",
      "order": 10,
    },
  ]

  for skill_data in desired_skills:
    _upsert_skill(Skill, **skill_data)


class Migration(migrations.Migration):

  dependencies = [("main", "0004_add_sophia_live_link")]

  operations = [migrations.RunPython(set_skills, migrations.RunPython.noop)]
