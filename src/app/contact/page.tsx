"use client";

import { motion } from "motion/react";
import { MapPin, Send, MessageSquare, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { GlassCard } from "@/components/blocks/GlassCard";
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
    <div className="min-h-screen px-6 pb-20 pt-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={MessageSquare}
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Let's build something amazing together."
          iconAnimation="pulse"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <GlassCard className="p-8">
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-gray-100">
                <Send className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Your Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Subject</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                    placeholder="Tell me about your project or collaboration idea..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 py-4 font-semibold text-white shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="h-5 w-5 rounded-full border-2 border-white border-t-transparent"
                      />
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
                        ✓
                      </motion.div>
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <GlassCard className="p-8">
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-gray-100">
                <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                Contact Information
              </h2>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="group flex items-center gap-4 rounded-2xl border-2 border-gray-200 p-4 transition-all hover:border-indigo-300 dark:border-gray-700 dark:hover:border-indigo-500/50"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${method.color} shadow-lg`}>
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{method.title}</div>
                      <div className="font-semibold text-gray-800 transition-colors group-hover:text-indigo-600 dark:text-gray-100 dark:group-hover:text-pink-400">
                        {method.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-white dark:border-transparent">
              <div className="mb-4 flex items-center gap-3">
                <MapPin className="h-6 w-6" />
                <h3 className="text-xl font-bold">Location</h3>
              </div>
              <p className="mb-2 text-lg opacity-90">Lahore, Pakistan</p>
              <p className="text-sm opacity-75">Available for remote work worldwide</p>

              <div className="mt-6 border-t border-white/20 pt-6">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  <span>Available for new projects</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-100">Quick Response Time</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  I typically respond to emails within 24 hours. For urgent matters, feel free to reach out on LinkedIn.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
