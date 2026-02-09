from django.contrib import admin

from .models import ContactFormEntry, Education, Experience, Project, Skill


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
  list_display = ("title", "company", "start_date", "end_date", "is_current", "order")
  list_filter = ("is_current", "company")
  search_fields = ("title", "company", "description", "tech_stack")
  ordering = ("order", "-start_date")


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
  list_display = ("name", "category", "level", "order")
  list_filter = ("category", "level")
  search_fields = ("name",)
  ordering = ("order", "name")


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
  list_display = ("title", "is_featured", "start_date", "order")
  list_filter = ("is_featured",)
  search_fields = ("title", "description", "tech_stack")
  prepopulated_fields = {"slug": ("title",)}
  ordering = ("order", "-start_date")


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
  list_display = ("degree", "institution", "start_date", "end_date", "order")
  search_fields = ("degree", "institution", "field_of_study")
  ordering = ("order", "-start_date")


@admin.register(ContactFormEntry)
class ContactFormEntryAdmin(admin.ModelAdmin):
  list_display = ("name", "email", "subject", "created_at", "is_responded")
  list_filter = ("is_responded", "created_at")
  search_fields = ("name", "email", "subject", "message")
  readonly_fields = ("name", "email", "subject", "message", "created_at")
