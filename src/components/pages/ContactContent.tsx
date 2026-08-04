"use client";

import { motion } from "motion/react";
import { MapPin, Send, MessageSquare, Phone, ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Card } from "@/components/blocks/Card";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { contactMethods } from "@/lib/data/contact";

function encodeFormData(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function ContactContent() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({ "form-name": "contact", ...formData }),
      });

      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 pb-24 pt-10 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid-bg -mx-6 mb-6 rounded-3xl px-6 py-12 text-center">
          <SectionHeading
            as="h1"
            icon={MessageSquare}
            title="Contact a Python & Django Developer in Pakistan"
            subtitle="Have a project in mind or want to collaborate? I'd love to hear about it."
            className="mb-6"
          />
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Available for new projects
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3"
          >
            <Card className="p-8">
              <h2 className="mb-6 flex items-center gap-2 text-xl font-extrabold tracking-tight text-foreground">
                <Send className="h-5 w-5 text-muted-foreground" />
                Send a Message
              </h2>

              <form
                onSubmit={handleSubmit}
                name="contact"
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                  </label>
                </p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-2.5 text-foreground outline-none transition-all focus:border-brand/50 focus:ring-2 focus:ring-brand/20"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-2.5 text-foreground outline-none transition-all focus:border-brand/50 focus:ring-2 focus:ring-brand/20"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-2.5 text-foreground outline-none transition-all focus:border-brand/50 focus:ring-2 focus:ring-brand/20"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-border bg-secondary/40 px-4 py-2.5 text-foreground outline-none transition-all focus:border-brand/50 focus:ring-2 focus:ring-brand/20"
                    placeholder="Tell me about your project or collaboration idea..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 py-3 text-sm font-medium text-white shadow-[0_0_30px_-8px_var(--brand)] transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : submitted ? (
                    "Sent Successfully!"
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
                {error && (
                  <p className="text-center text-sm text-destructive">
                    Something went wrong sending that. Please try again, or email me directly at{" "}
                    <a href="mailto:asimshafique59@gmail.com" className="underline">
                      asimshafique59@gmail.com
                    </a>
                    .
                  </p>
                )}
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-6 lg:col-span-2"
          >
            <Card className="p-6">
              <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                <Phone className="h-4 w-4" />
                Contact Information
              </h2>

              <div className="space-y-3">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-lg border border-border p-3.5 transition-all hover:border-brand/40 hover:bg-secondary/40"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-gradient-to-br from-brand/10 to-brand-2/10 text-brand">
                      <method.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-muted-foreground">{method.title}</div>
                      <div className="truncate font-medium text-foreground transition-colors group-hover:text-brand">{method.value}</div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </Card>

            <Card className="grid-bg relative overflow-hidden p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-gradient-to-br from-brand/10 to-brand-2/10 text-brand">
                  <MapPin className="h-4 w-4" />
                </span>
                <h3 className="font-extrabold tracking-tight text-foreground">Location</h3>
              </div>
              <p className="text-foreground">Lahore, Pakistan</p>
              <p className="text-sm text-muted-foreground">Available for remote work worldwide</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-gradient-to-br from-brand/10 to-brand-2/10 text-brand">
                  <MessageSquare className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Quick Response Time</h3>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours. For urgent matters, reach out on LinkedIn.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
