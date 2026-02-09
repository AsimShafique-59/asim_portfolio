from django.db import models
from django.utils.text import slugify


class Experience(models.Model):
  title = models.CharField(max_length=140)
  company = models.CharField(max_length=160)
  location = models.CharField(max_length=120, blank=True)
  start_date = models.DateField()
  end_date = models.DateField(blank=True, null=True)
  is_current = models.BooleanField(default=False)
  description = models.TextField()
  highlights = models.TextField(
    blank=True,
    help_text="Use one line per bullet point.",
  )
  tech_stack = models.CharField(
    max_length=255,
    blank=True,
    help_text="Comma-separated technologies.",
  )
  order = models.PositiveIntegerField(default=0)

  class Meta:
    ordering = ["order", "-start_date", "-id"]

  def __str__(self):
    return f"{self.title} @ {self.company}"

  @property
  def date_range(self):
    start_label = self.start_date.strftime("%b %Y")
    if self.is_current:
      end_label = "Present"
    else:
      end_label = self.end_date.strftime("%b %Y") if self.end_date else "Present"
    return f"{start_label} - {end_label}"

  @property
  def highlights_list(self):
    items = []
    for line in self.highlights.splitlines():
      normalized = line.strip().lstrip("-").lstrip("*").strip()
      if normalized:
        items.append(normalized)
    return items

  @property
  def tech_list(self):
    return [item.strip() for item in self.tech_stack.split(",") if item.strip()]


class Skill(models.Model):
  class Category(models.TextChoices):
    BACKEND = "backend", "Backend"
    AI = "ai", "AI and LLM"
    DATABASE = "database", "Databases"
    DEVOPS = "devops", "Cloud and DevOps"
    FRONTEND = "frontend", "Frontend"
    TOOLS = "tools", "Tools"
    SOFT = "soft", "Soft Skills"

  class Level(models.TextChoices):
    INTERMEDIATE = "intermediate", "Intermediate"
    ADVANCED = "advanced", "Advanced"
    EXPERT = "expert", "Expert"

  name = models.CharField(max_length=100)
  category = models.CharField(
    max_length=20,
    choices=Category.choices,
    default=Category.BACKEND,
  )
  level = models.CharField(
    max_length=20,
    choices=Level.choices,
    default=Level.ADVANCED,
  )
  order = models.PositiveIntegerField(default=0)

  class Meta:
    ordering = ["order", "name"]

  def __str__(self):
    return self.name


class Project(models.Model):
  title = models.CharField(max_length=160)
  slug = models.SlugField(max_length=180, unique=True, blank=True)
  short_description = models.CharField(max_length=220)
  description = models.TextField()
  tech_stack = models.CharField(
    max_length=255,
    help_text="Comma-separated technologies.",
  )
  image = models.ImageField(upload_to="projects/", blank=True, null=True)
  live_url = models.URLField(blank=True)
  github_url = models.URLField(blank=True)
  start_date = models.DateField(blank=True, null=True)
  end_date = models.DateField(blank=True, null=True)
  is_featured = models.BooleanField(default=True)
  order = models.PositiveIntegerField(default=0)

  class Meta:
    ordering = ["order", "-start_date", "-id"]

  def __str__(self):
    return self.title

  def save(self, *args, **kwargs):
    if not self.slug:
      self.slug = slugify(self.title)
    super().save(*args, **kwargs)

  @property
  def tech_list(self):
    return [item.strip() for item in self.tech_stack.split(",") if item.strip()]


class Education(models.Model):
  institution = models.CharField(max_length=180)
  degree = models.CharField(max_length=180)
  field_of_study = models.CharField(max_length=180, blank=True)
  location = models.CharField(max_length=120, blank=True)
  start_date = models.DateField()
  end_date = models.DateField(blank=True, null=True)
  grade = models.CharField(max_length=120, blank=True)
  description = models.TextField(blank=True)
  order = models.PositiveIntegerField(default=0)

  class Meta:
    ordering = ["order", "-start_date", "-id"]

  def __str__(self):
    return f"{self.degree} - {self.institution}"

  @property
  def date_range(self):
    start_label = self.start_date.strftime("%Y")
    end_label = self.end_date.strftime("%Y") if self.end_date else "Present"
    return f"{start_label} - {end_label}"


class ContactFormEntry(models.Model):
  name = models.CharField(max_length=120)
  email = models.EmailField()
  subject = models.CharField(max_length=180)
  message = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)
  is_responded = models.BooleanField(default=False)

  class Meta:
    ordering = ["-created_at"]
    verbose_name_plural = "Contact form entries"

  def __str__(self):
    return f"{self.name} - {self.subject}"
