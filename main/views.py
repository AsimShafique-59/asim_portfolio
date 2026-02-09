from django.conf import settings
from django.contrib import messages
from django.core.mail import send_mail
from django.http import HttpResponseNotAllowed
from django.shortcuts import redirect, render
from django.urls import reverse

from .forms import ContactForm
from .models import Education, Experience, Project, Skill


PROFESSIONAL_SUMMARY = (
  "Dedicated and results-driven Python AI Engineer with strong expertise in "
  "Django REST Framework, FastAPI, and backend development. Skilled in building "
  "LLM-powered applications with LangChain, LangGraph, CrewAI, OpenAI Agent SDK, "
  "and vector databases. Focused on delivering scalable AI solutions with clean "
  "architecture and production-grade reliability."
)

SKILL_CATEGORY_META = {
  "frontend": {"title": "Frontend Technologies", "icon": "bi bi-window"},
  "backend": {"title": "Backend Technologies", "icon": "bi bi-gear-fill"},
  "ai": {"title": "AI and LLM Engineering", "icon": "bi bi-cpu-fill"},
  "database": {"title": "Databases", "icon": "bi bi-database-fill"},
  "devops": {"title": "Cloud and DevOps", "icon": "bi bi-cloud-fill"},
  "tools": {"title": "Development Tools", "icon": "bi bi-tools"},
  "soft": {"title": "Architecture and Soft Skills", "icon": "bi bi-diagram-3-fill"},
}

SKILL_CATEGORY_ORDER = [
  "frontend",
  "backend",
  "ai",
  "database",
  "devops",
  "tools",
  "soft",
]

PROGRAMMING_LANGUAGE_NAMES = {
  "python",
  "javascript",
  "typescript",
  "sql",
  "java",
  "c++",
  "php",
}


def _build_skill_groups():
  grouped = {}
  language_skills = []
  skills = Skill.objects.all().order_by("order", "name")
  for skill in skills:
    if skill.name.strip().lower() in PROGRAMMING_LANGUAGE_NAMES:
      language_skills.append(skill)
      continue
    grouped.setdefault(skill.category, []).append(skill)

  groups = []
  seen_categories = set()

  if language_skills:
    groups.append(
      {
        "category": "languages",
        "title": "Programming Languages",
        "icon": "bi bi-code-slash",
        "skills": language_skills,
      }
    )

  for category in SKILL_CATEGORY_ORDER:
    category_skills = grouped.get(category, [])
    if not category_skills:
      continue

    meta = SKILL_CATEGORY_META.get(category, {})
    groups.append(
      {
        "category": category,
        "title": meta.get("title", category.title()),
        "icon": meta.get("icon", "bi bi-stars"),
        "skills": category_skills,
      }
    )
    seen_categories.add(category)

  # Fallback for any category not explicitly listed in the preferred order.
  for category in sorted(set(grouped.keys()) - seen_categories):
    groups.append(
      {
        "category": category,
        "title": category.replace("_", " ").title(),
        "icon": "bi bi-stars",
        "skills": grouped[category],
      }
    )

  return groups


def _home_context(contact_form=None):
  return {
    "full_name": "Asim Shafique",
    "current_role": "Django Python Developer at Hased Systems",
    "professional_summary": PROFESSIONAL_SUMMARY,
    "experiences": Experience.objects.all(),
    "skills": Skill.objects.all().order_by("category", "order", "name"),
    "skill_groups": _build_skill_groups(),
    "projects": Project.objects.filter(is_featured=True),
    "education_list": Education.objects.all(),
    "contact_form": contact_form or ContactForm(),
    "contact_email": settings.PORTFOLIO_CONTACT_EMAIL,
  }


def home(request):
  return render(request, "main/home.html", _home_context())


def contact_submit(request):
  if request.method != "POST":
    return HttpResponseNotAllowed(["POST"])

  form = ContactForm(request.POST)
  if not form.is_valid():
    messages.error(request, "Please fix the errors in the contact form and try again.")
    context = _home_context(contact_form=form)
    return render(request, "main/home.html", context, status=400)

  entry = form.save()

  try:
    send_mail(
      subject=f"Portfolio Contact: {entry.subject}",
      message=(
        f"Name: {entry.name}\n"
        f"Email: {entry.email}\n\n"
        f"Message:\n{entry.message}"
      ),
      from_email=settings.DEFAULT_FROM_EMAIL,
      recipient_list=[settings.PORTFOLIO_CONTACT_EMAIL],
      fail_silently=False,
    )
    messages.success(request, "Thanks! Your message was sent successfully.")
  except Exception:
    # Fallback behavior: the message is already persisted in the database.
    messages.warning(
      request,
      "Your message was saved, but email delivery is not configured yet.",
    )

  return redirect(f"{reverse('main:home')}#contact")
