import { promises as fs } from "node:fs";
import path from "node:path";

import { NextResponse } from "next/server";

const submissionsFilePath = path.join(process.cwd(), "data", "contact-submissions.json");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isServerlessEnv = process.env.NETLIFY === "true";

function validatePayload(payload) {
  const errors = {};

  if (!payload?.name?.trim()) {
    errors.name = "This field is required.";
  }

  if (!payload?.email?.trim()) {
    errors.email = "This field is required.";
  } else if (!emailPattern.test(payload.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!payload?.subject?.trim()) {
    errors.subject = "This field is required.";
  } else if (payload.subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters long.";
  }

  if (!payload?.message?.trim()) {
    errors.message = "This field is required.";
  } else if (payload.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  }

  return errors;
}

async function readExistingSubmissions() {
  try {
    const raw = await fs.readFile(submissionsFilePath, "utf8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const errors = validatePayload(payload);

    if (Object.keys(errors).length) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please fix the errors in the contact form and try again.",
          errors
        },
        { status: 400 }
      );
    }

    const entry = {
      id: Date.now(),
      name: payload.name.trim(),
      email: payload.email.trim(),
      subject: payload.subject.trim(),
      message: payload.message.trim(),
      createdAt: new Date().toISOString()
    };

    if (!isServerlessEnv) {
      const currentEntries = await readExistingSubmissions();
      currentEntries.unshift(entry);

      await fs.mkdir(path.dirname(submissionsFilePath), { recursive: true });
      await fs.writeFile(submissionsFilePath, `${JSON.stringify(currentEntries, null, 2)}\n`, "utf8");
    }

    return NextResponse.json({
      ok: true,
      message: "Thanks! Your message was sent successfully."
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong while sending your message."
      },
      { status: 500 }
    );
  }
}
