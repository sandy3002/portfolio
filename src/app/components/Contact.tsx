"use client";

import { useState } from "react";
import Section from "./Section";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(
          (errorData as { error?: string }).error ||
            "Something went wrong. Try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const fieldClass =
    "w-full px-4 py-3 border border-rule rounded-lg bg-card text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors";

  return (
    <Section
      id="contact"
      chapter="07 · Write Me"
      title="Drop a note"
      lead="Say hello, share an idea, or just leave a margin scribbles. I'll write back."
    >
      <div className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <label
              htmlFor="name"
              className="block font-mono text-xs uppercase tracking-[0.14em] text-muted mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={fieldClass}
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-mono text-xs uppercase tracking-[0.14em] text-muted mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={fieldClass}
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block font-mono text-xs uppercase tracking-[0.14em] text-muted mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={fieldClass}
              placeholder="What's on your mind?"
              required
            />
          </div>

          {status === "success" && (
            <p
              className="text-sm text-accent font-medium"
              role="status"
              aria-live="polite"
            >
              Note sent — thanks for writing.
            </p>
          )}
          {status === "error" && (
            <p
              className="text-sm text-red-700 font-medium"
              role="alert"
              aria-live="assertive"
            >
              {errorMessage}
            </p>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto px-8 py-3 font-mono text-xs uppercase tracking-[0.14em] text-on-accent bg-accent rounded-full hover:brightness-110 transition-[filter] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending…" : "Send the note"}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
