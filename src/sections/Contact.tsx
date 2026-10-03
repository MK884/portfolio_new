import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Copy,
  FileText,
  Globe,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { about } from "../data";

const projectTypes = [
  "React Native Mobile App",
  "React / Next.js Website",
  "Full-Stack Application",
  "UI / Frontend Development",
  "Backend - Server",
  "Other",
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(about.email);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSending(true);
    setSent(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.WEB3FORMS_KEY);
    formData.append(
      "subject",
      `Portfolio inquiry: ${formData.get("projectType")}`,
    );
    formData.append("from_name", "Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Unable to send your message.");
      }

      setSent(true);
      setProjectType("");
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="min-w-dvw border-t border-[var(--border)]">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        {/* Main */}
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          {/* -------------------------------- */}
          {/* Left */}
          {/* -------------------------------- */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Label */}
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
              07 / Contact
            </span>

            {/* Heading */}
            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-[3.5rem]">
              Have a project or opportunity in mind?
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-base">
              Let&apos;s build something extraordinary together. Whether
              it&apos;s a mobile app, web experience, or something completely
              new.
            </p>

            {/* Email */}
            <div
              className="
                mt-8
                flex
                items-center
                justify-between
                gap-4
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                p-3
                pl-4
                transition-colors
                duration-300
                hover:border-[var(--foreground)]/20
                sm:p-4
                sm:pl-5
              "
            >
              <div className="flex min-w-0 items-center gap-3">
                <Mail size={19} className="shrink-0 text-[var(--accent)]" />

                <span className="truncate font-mono text-xs text-[var(--foreground)] sm:text-sm">
                  {about.email}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="
                  flex
                  h-9
                  shrink-0
                  items-center
                  gap-2
                  rounded-md
                  border
                  border-[var(--border)]
                  bg-[var(--bg)]
                  px-3
                  font-mono
                  text-[10px]
                  text-[var(--muted)]
                  transition-all
                  duration-200
                  hover:border-[var(--foreground)]/20
                  hover:text-[var(--foreground)]
                  cursor-pointer
                "
              >
                {copied ? (
                  <>
                    <Check size={13} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    Copy
                  </>
                )}
              </button>
            </div>

            {/* Availability */}
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="font-mono text-[10px] text-[var(--muted)]">
                  Usually replies within 24 hours
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Globe size={13} className="text-[var(--muted)]" />

                <span className="font-mono text-[10px] text-[var(--muted)]">
                  UTC +5:30 / India
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-7 flex flex-wrap gap-2">
              <SocialLink
                href={about.github}
                icon={<BsGithub size={15} />}
                label="GitHub"
              />

              <SocialLink
                href={about.linkedin}
                icon={<FaLinkedin size={15} />}
                label="LinkedIn"
              />

              <SocialLink
                href={about.resume}
                icon={<FileText size={15} />}
                label="Resume PDF"
              />
            </div>
          </motion.div>

          {/* -------------------------------- */}
          {/* Right - Contact Form */}
          {/* -------------------------------- */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--surface)]
              p-5
              sm:p-7
              lg:p-8
            "
          >
            {/* Name + Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Your Name" icon={<User size={16} />}>
                <input
                  required
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="e.g. Alex Henderson"
                  className="contact-input with-icon"
                />
              </FormField>

              <FormField label="Your Email" icon={<Mail size={16} />}>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="alex@company.com"
                  className="contact-input with-icon"
                />
              </FormField>
            </div>

            {/* Project Type */}
            <div className="mt-5">
              <label
                htmlFor="projectType"
                className="
                  mb-2.5
                  block
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.12em]
                  text-[var(--muted)]
                "
              >
                Project Type
              </label>

              <div className="relative">
                <select
                  id="projectType"
                  required
                  name="projectType"
                  value={projectType}
                  onChange={(event) => setProjectType(event.target.value)}
                  className="
                    contact-input
                    w-full
                    appearance-none
                    pr-10
                    cursor-pointer
                  "
                >
                  <option value="" disabled>
                    Select a project type
                  </option>

                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                <ArrowRight
                  size={16}
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    rotate-90
                    text-[var(--muted)]
                  "
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="
                  mb-2.5
                  block
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.12em]
                  text-[var(--muted)]
                "
              >
                Message
              </label>

              <div className="relative">
                <MessageSquare
                  size={16}
                  className="
                    pointer-events-none
                    absolute
                    left-4
                    top-4
                    text-[var(--muted)]
                  "
                />

                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project, goals, timeline, or anything else..."
                  className="
                    contact-input
                    with-icon
                    min-h-[120px]
                    w-full
                    resize-y
                    pl-11
                  "
                />
              </div>
            </div>

            {/* Status */}
            <div className="mt-5">
              {sent && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="flex items-center gap-2 text-xs text-emerald-400"
                >
                  <Check size={14} />
                  Thanks! Your message has been sent.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="text-xs text-red-400"
                >
                  {error}
                </motion.div>
              )}
            </div>

            {/* Submit */}
            <div className="mt-5 flex justify-end">
              <button
                type="submit"
                disabled={isSending}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-[var(--accent)]
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  shadow-[0_0_30px_rgba(99,91,255,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_0_35px_rgba(99,91,255,0.3)]
                  active:translate-y-0
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  cursor-pointer
                "
              >
                {isSending ? "Sending..." : "Send Message"}

                {isSending ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                ) : (
                  <ArrowRight size={16} />
                )}
              </button>
            </div>
          </motion.form>
        </div>

        {/* Footer Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-16 border-t border-[var(--border)] pt-6 sm:mt-20"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[var(--foreground)]">
              Let&apos;s create what&apos;s next.
            </p>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                Open to opportunities
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------- */
/* Form Field                       */
/* -------------------------------- */

function FormField({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2.5 block font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
        {label}
      </label>

      <div className="relative">
        <div className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[var(--muted)]">
          {icon}
        </div>

        {children}
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Social Link                      */
/* -------------------------------- */

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex
        items-center
        gap-2
        rounded-lg
        border
        border-[var(--border)]
        bg-[var(--surface)]
        px-4
        py-2.5
        text-xs
        text-[var(--muted)]
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-[var(--foreground)]/20
        hover:text-[var(--foreground)]
      "
    >
      {icon}
      {label}
    </a>
  );
}
