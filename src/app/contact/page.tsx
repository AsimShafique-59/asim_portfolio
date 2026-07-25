"use client";

import { motion } from "motion/react";
import { MapPin, Send, MessageSquare, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Card } from "@/components/blocks/Card";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { contactMethods } from "@/lib/data/contact";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <div className="px-6 pb-24 pt-10 sm:pt-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid-bg -mx-6 mb-10 rounded-3xl px-6 py-12">
          <SectionHeading
            icon={MessageSquare}
            title="Get In Touch"
            subtitle="Have a project in mind or want to collaborate? Let's build something amazing together."
            className="mb-0"
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <Card className="p-8">
              <h2 className="mb-6 flex items-center gap-2 text-xl font-extrabold tracking-tight text-foreground">
                <Send className="h-5 w-5 text-muted-foreground" />
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 shadow-[0_0_30px_-8px_var(--brand)] py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
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
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-6"
          >
            <Card className="p-8">
              <h2 className="mb-6 flex items-center gap-2 text-xl font-extrabold tracking-tight text-foreground">
                <Phone className="h-5 w-5 text-muted-foreground" />
                Contact Information
              </h2>

              <div className="space-y-3">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-lg border border-border p-4 transition-all hover:border-brand/40 hover:bg-secondary/40"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-gradient-to-br from-brand/10 to-brand-2/10 text-brand">
                      <method.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm text-muted-foreground">{method.title}</div>
                      <div className="font-medium text-foreground transition-colors group-hover:text-brand">{method.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <div className="mb-4 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-lg font-extrabold tracking-tight text-foreground">Location</h3>
              </div>
              <p className="mb-1 text-foreground">Lahore, Pakistan</p>
              <p className="text-sm text-muted-foreground">Available for remote work worldwide</p>

              <div className="mt-5 border-t border-border pt-5">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Available for new projects
                </div>
              </div>
            </Card>

            <Card className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-gradient-to-br from-brand/10 to-brand-2/10 text-brand">
                <MessageSquare className="h-5 w-5" />
              </span>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Quick Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond to emails within 24 hours. For urgent matters, feel free to reach out on LinkedIn.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
