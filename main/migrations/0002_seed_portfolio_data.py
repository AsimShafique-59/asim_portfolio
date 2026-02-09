from datetime import date

from django.db import migrations


def seed_data(apps, schema_editor):
  Experience = apps.get_model("main", "Experience")
  Skill = apps.get_model("main", "Skill")
  Project = apps.get_model("main", "Project")
  Education = apps.get_model("main", "Education")

  if Experience.objects.exists():
    return

  Experience.objects.bulk_create(
    [
      Experience(
        title="Junior AI Engineer",
        company="Web Excels",
        location="Lahore, Pakistan",
        start_date=date(2025, 11, 1),
        end_date=None,
        is_current=True,
        description=(
          "Developing AI-powered applications using Python, LangChain, OpenAI API, "
          "and vector databases for production workflows."
        ),
        highlights=(
          "Building and optimizing LLM pipelines for chatbots and data extraction.\n"
          "Integrating AI models into backend systems with scalable architecture.\n"
          "Running prompt engineering and model evaluation for continuous quality gains."
        ),
        tech_stack="Python, LangChain, OpenAI API, Vector Databases, FastAPI",
        order=1,
      ),
      Experience(
        title="Software Engineer (Backend and AI Systems)",
        company="Artificizen",
        location="Lahore, Pakistan",
        start_date=date(2025, 4, 1),
        end_date=date(2025, 9, 30),
        is_current=False,
        description=(
          "Designed and delivered chatbot and backend solutions with Django and modern "
          "AI tooling."
        ),
        highlights=(
          "Built AI chatbots with LangChain, LangGraph, CrewAI, and OpenAI SDK.\n"
          "Implemented JWT-based backend APIs with Django and DRF.\n"
          "Collaborated with cross-functional teams to ship client-focused solutions."
        ),
        tech_stack="Python, Django, DRF, LangGraph, CrewAI, OpenAI SDK, JWT",
        order=2,
      ),
      Experience(
        title="Python Backend Developer",
        company="AB IT and Technical Services Limited",
        location="Remote (United Kingdom)",
        start_date=date(2024, 6, 1),
        end_date=date(2025, 6, 30),
        is_current=False,
        description=(
          "Developed scalable backend services, APIs, and deployment pipelines for "
          "distributed production environments."
        ),
        highlights=(
          "Implemented Django and DRF services with relational and NoSQL databases.\n"
          "Built microservices and automated testing with Pytest and Unittest.\n"
          "Containerized deployments with Docker, GitHub Actions, and CI/CD."
        ),
        tech_stack="Python, Django, DRF, PostgreSQL, MongoDB, Docker, CI/CD",
        order=3,
      ),
    ]
  )

  Skill.objects.bulk_create(
    [
      Skill(name="Python", category="backend", level="expert", order=1),
      Skill(name="Django", category="backend", level="expert", order=2),
      Skill(name="Django REST Framework", category="backend", level="expert", order=3),
      Skill(name="FastAPI", category="backend", level="advanced", order=4),
      Skill(name="LangChain", category="ai", level="expert", order=5),
      Skill(name="LangGraph", category="ai", level="advanced", order=6),
      Skill(name="CrewAI", category="ai", level="advanced", order=7),
      Skill(name="OpenAI Agent SDK", category="ai", level="advanced", order=8),
      Skill(name="RAG Systems", category="ai", level="advanced", order=9),
      Skill(name="PostgreSQL", category="database", level="advanced", order=10),
      Skill(name="MongoDB", category="database", level="advanced", order=11),
      Skill(name="Docker", category="devops", level="advanced", order=12),
      Skill(name="AWS", category="devops", level="advanced", order=13),
      Skill(name="GitHub Actions", category="tools", level="advanced", order=14),
      Skill(name="JavaScript", category="frontend", level="intermediate", order=15),
      Skill(name="System Design", category="soft", level="advanced", order=16),
    ]
  )

  Project.objects.bulk_create(
    [
      Project(
        title="Power Email AI",
        slug="power-email-ai",
        short_description=(
          "Full-stack AI email automation system with smart replies, routing, and campaigns."
        ),
        description=(
          "Engineered an AI email platform with workflow automation, JWT authentication, "
          "encrypted credential storage, and AWS SES email pipelines. Built a React interface "
          "for automation control and template management."
        ),
        tech_stack="Python, OpenAI, AWS SES, React, JWT, Automation",
        live_url="https://excels-technology.com/files",
        github_url="",
        start_date=date(2025, 1, 1),
        end_date=date(2025, 12, 1),
        is_featured=True,
        order=1,
      ),
      Project(
        title="Peer Learning Circle Web Application",
        slug="peer-learning-circle",
        short_description=(
          "Scalable student collaboration platform for managing study groups."
        ),
        description=(
          "Built a Django web application to help students create and manage peer learning "
          "groups with improved admin controls and collaboration flows."
        ),
        tech_stack="Python, Django, DRF, REST APIs",
        live_url="",
        github_url="",
        start_date=date(2025, 1, 1),
        end_date=date(2025, 12, 1),
        is_featured=True,
        order=2,
      ),
      Project(
        title="Sophia Bot - AI Healthcare Assistant",
        slug="sophia-bot-ai-healthcare-assistant",
        short_description=(
          "Healthcare chatbot with context-aware responses and conversation memory."
        ),
        description=(
          "Developed a healthcare assistant powered by OpenAI Agent SDK and Groq Llama-3 "
          "with RAG architecture. Designed for future EHR integration with measured answer "
          "accuracy around 92%."
        ),
        tech_stack="OpenAI Agent SDK, Groq Llama-3, RAG, Python",
        live_url="",
        github_url="",
        start_date=date(2025, 1, 1),
        end_date=date(2025, 12, 1),
        is_featured=True,
        order=3,
      ),
      Project(
        title="Multi-Modal RAG with Contextual References",
        slug="multi-modal-rag-contextual-references",
        short_description=(
          "Multi-modal retrieval system for documents, images, and multimedia references."
        ),
        description=(
          "Designed a RAG pipeline that processes PDF, DOCX, CSV, and image sources using "
          "LangChain and ChromaDB. Added audio and video timestamp extraction for richer "
          "context retrieval."
        ),
        tech_stack="LangChain, ChromaDB, Groq Llama-3, Python, RAG",
        live_url="",
        github_url="",
        start_date=date(2025, 1, 1),
        end_date=date(2025, 12, 1),
        is_featured=True,
        order=4,
      ),
    ]
  )

  Education.objects.create(
    institution="Qualifi (UK Accredited)",
    degree="Qualifi Level 5 Diploma in Information Technology",
    field_of_study="Information Technology",
    location="Lahore, Pakistan",
    start_date=date(2025, 1, 1),
    end_date=date(2025, 12, 31),
    grade="IELTS Academic Overall Band Score: 6.0",
    description="Languages: English, Urdu, German.",
    order=1,
  )


def rollback_seed_data(apps, schema_editor):
  Experience = apps.get_model("main", "Experience")
  Skill = apps.get_model("main", "Skill")
  Project = apps.get_model("main", "Project")
  Education = apps.get_model("main", "Education")

  Experience.objects.all().delete()
  Skill.objects.all().delete()
  Project.objects.all().delete()
  Education.objects.all().delete()


class Migration(migrations.Migration):

  dependencies = [("main", "0001_initial")]

  operations = [migrations.RunPython(seed_data, rollback_seed_data)]
