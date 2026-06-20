import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Instagram,
  Music2,
  GraduationCap,
  Trophy,
  Sparkles,
} from "lucide-react";
import {
  profile,
  stats,
  education,
  experience,
  achievements,
  skills,
} from "./data.js";

const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(-2)
    .join("");
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "border-b border-black/5 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-neutral-950/80"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="font-display text-lg font-600 tracking-tight">
          Cat Linh
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-linear-to-b from-accent-50 to-transparent dark:from-accent-900/15"
      />
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
          <div className="animate-rise flex size-28 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-accent-500 to-accent-700 font-display text-3xl font-600 text-white shadow-sm md:size-32">
            {initials(profile.name)}
          </div>
          <div className="animate-rise" style={{ animationDelay: "60ms" }}>
            <p className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/10 px-3 py-1 text-sm font-medium text-accent-700 dark:text-accent-300">
              <Sparkles className="size-3.5" />
              Open to opportunities
            </p>
            <h1 className="mt-4 font-display text-4xl font-600 leading-tight tracking-tight text-neutral-950 sm:text-5xl dark:text-white">
              {profile.name}
            </h1>
            <p className="mt-3 max-w-prose text-lg text-neutral-600 dark:text-neutral-400">
              {profile.title}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-500 dark:text-neutral-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4" /> {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-accent-600"
              >
                <Mail className="size-4" /> {profile.email}
              </a>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="size-4" /> {profile.phone}
              </span>
            </div>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/5 bg-black/5 sm:grid-cols-4 dark:border-white/10 dark:bg-white/10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white p-6 dark:bg-neutral-950"
            >
              <dt className="font-display text-2xl font-600 text-neutral-950 dark:text-white">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-neutral-500">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mb-10 max-w-prose">
        <p className="text-sm font-medium uppercase tracking-wider text-accent-600">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-display text-3xl font-600 tracking-tight text-neutral-950 dark:text-white">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="A quick introduction">
      <p className="max-w-prose text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
        {profile.summary}
      </p>
      <div className="mt-10">
        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-neutral-500">
          <GraduationCap className="size-4" /> Education
        </h3>
        {education.map((ed) => (
          <div
            key={ed.school}
            className="mt-4 flex flex-col justify-between gap-1 rounded-xl border border-black/5 bg-white p-6 shadow-sm sm:flex-row sm:items-center dark:border-white/10 dark:bg-neutral-900"
          >
            <div>
              <p className="font-medium text-neutral-950 dark:text-white">{ed.school}</p>
              <p className="text-sm text-neutral-500">{ed.field}</p>
            </div>
            <div className="text-sm text-neutral-500 sm:text-right">
              <p className="font-medium text-accent-600">{ed.detail}</p>
              <p>{ed.period}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've made an impact">
      <div className="relative space-y-10 border-l border-black/10 pl-8 dark:border-white/10">
        {experience.map((job) => (
          <article key={job.org} className="relative">
            <span className="absolute left-[-37px] top-1.5 size-3 rounded-full border-2 border-white bg-accent-500 dark:border-neutral-950" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-xl font-600 text-neutral-950 dark:text-white">
                {job.org}
              </h3>
              <span className="text-sm text-neutral-500">{job.period}</span>
            </div>
            <p className="mt-0.5 text-sm font-medium text-accent-600">{job.role}</p>
            <ul className="mt-4 space-y-2.5">
              {job.points.map((pt, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                >
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-neutral-400" />
                  {pt}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition & wins">
      <div className="space-y-6">
        {achievements.map((a) => (
          <article
            key={a.title}
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm md:p-8 dark:border-white/10 dark:bg-neutral-900"
          >
            <div className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600">
                <Trophy className="size-5" />
              </span>
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-lg font-600 text-neutral-950 dark:text-white">
                    {a.title}
                  </h3>
                  <span className="text-sm text-neutral-500">{a.period}</span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-accent-600">{a.subtitle}</p>
                <ul className="mt-4 space-y-2.5">
                  {a.points.map((pt, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-neutral-400" />
                      {pt}
                    </li>
                  ))}
                </ul>
                {a.link && (
                  <a
                    href={a.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent-600 transition-colors hover:text-accent-700"
                  >
                    {a.link.label}
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Certifications & strengths">
      <div className="grid gap-6 sm:grid-cols-3">
        {skills.map((s) => (
          <div
            key={s.group}
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-neutral-900"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
              {s.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-neutral-100 px-3 py-1.5 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const iconFor = (label) =>
    label === "Instagram" ? Instagram : label === "TikTok" ? Music2 : Mail;
  return (
    <Section id="contact" eyebrow="Contact" title="Let's connect">
      <div className="rounded-2xl bg-neutral-950 p-8 md:p-12 dark:bg-neutral-900">
        <p className="max-w-prose text-lg leading-relaxed text-neutral-300">
          Whether it's a collaboration, a role, or a chat about startups and
          content — I'd love to hear from you.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {profile.socials.map((s) => {
            const Icon = iconFor(s.label);
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
              >
                <Icon className="size-4" />
                {s.handle}
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-8 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-4 text-sm text-neutral-500 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {profile.name}. Built with care.
        </div>
      </footer>
    </div>
  );
}
