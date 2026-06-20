import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Instagram,
  Music2,
  Linkedin,
  GraduationCap,
  Trophy,
  Sparkles,
  Rocket,
  ImageIcon,
} from "lucide-react";
import {
  profile,
  stats,
  education,
  experience,
  projects,
  achievements,
  skills,
  instagram,
} from "./data.js";

const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Feed", href: "#feed" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function ImageWithFallback({ src, alt, className, fallback = null }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center bg-linear-to-br from-accent-100 to-accent-200 text-accent-400 ${className}`}
      >
        {fallback ?? <ImageIcon className="size-8" />}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

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
          ? "border-b border-accent-900/5 bg-cream/80 backdrop-blur"
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
              className="text-sm text-neutral-500 transition-colors hover:text-accent-600"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-accent-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
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
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-linear-to-b from-accent-100/70 via-accent-50/40 to-transparent"
      />
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
          <div className="animate-rise size-28 shrink-0 overflow-hidden rounded-2xl shadow-sm md:size-32">
            <ImageWithFallback
              src={profile.photo}
              alt={profile.name}
              className="size-full object-cover"
              fallback={
                <span className="flex size-full items-center justify-center bg-linear-to-br from-accent-300 to-accent-500 font-display text-3xl font-600 text-white">
                  {initials(profile.name)}
                </span>
              }
            />
          </div>
          <div className="animate-rise" style={{ animationDelay: "60ms" }}>
            <p className="inline-flex items-center gap-1.5 rounded-full bg-accent-100 px-3 py-1 text-sm font-medium text-accent-700">
              <Sparkles className="size-3.5" />
              Open to opportunities
            </p>
            <h1 className="mt-4 font-display text-4xl font-600 leading-tight tracking-tight text-neutral-800 sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 max-w-prose text-lg text-neutral-500">
              {profile.title}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-500">
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

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-accent-200/60 bg-accent-200/40 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/80 p-6"
            >
              <dt className="font-display text-2xl font-600 text-accent-700">
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
        <h2 className="mt-2 font-display text-3xl font-600 tracking-tight text-neutral-800">
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
      <p className="max-w-prose text-lg leading-relaxed text-neutral-600">
        {profile.summary}
      </p>
      <div className="mt-10">
        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-neutral-500">
          <GraduationCap className="size-4" /> Education
        </h3>
        {education.map((ed) => (
          <div
            key={ed.school}
            className="mt-4 flex flex-col justify-between gap-1 rounded-xl border border-accent-200/60 bg-white p-6 shadow-sm sm:flex-row sm:items-center"
          >
            <div>
              <p className="font-medium text-neutral-800">{ed.school}</p>
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
      <div className="relative space-y-10 border-l border-accent-200 pl-8">
        {experience.map((job) => (
          <article key={job.org} className="relative">
            <span className="absolute left-[-37px] top-1.5 size-3 rounded-full border-2 border-cream bg-accent-400" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-xl font-600 text-neutral-800">
                {job.org}
              </h3>
              <span className="text-sm text-neutral-500">{job.period}</span>
            </div>
            <p className="mt-0.5 text-sm font-medium text-accent-600">{job.role}</p>
            {job.summary && (
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-neutral-600">
                {job.summary}
              </p>
            )}
            <ul className="mt-4 space-y-2.5">
              {job.points.map((pt, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-neutral-600"
                >
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-300" />
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

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="flex flex-col overflow-hidden rounded-2xl border border-accent-200/60 bg-white shadow-sm"
          >
            <ImageWithFallback
              src={p.image}
              alt={p.name}
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
                  <Rocket className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-600 text-neutral-800">
                    {p.name}
                  </h3>
                  <p className="text-sm font-medium text-accent-600">{p.tagline}</p>
                  <p className="mt-0.5 text-sm text-neutral-500">{p.period}</p>
                </div>
              </div>
              <ul className="mt-5 flex-1 space-y-2.5">
                {p.points.map((pt, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-neutral-600"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-300" />
                    {pt}
                  </li>
                ))}
              </ul>
              {p.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-4 border-t border-accent-100 pt-4">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent-600 transition-colors hover:text-accent-700"
                    >
                      {l.label}
                      <ArrowUpRight className="size-4" />
                    </a>
                  ))}
                </div>
              )}
            </div>
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
            className="rounded-2xl border border-accent-200/60 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
                <Trophy className="size-5" />
              </span>
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-lg font-600 text-neutral-800">
                    {a.title}
                  </h3>
                  <span className="text-sm text-neutral-500">{a.period}</span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-accent-600">{a.subtitle}</p>
                <ul className="mt-4 space-y-2.5">
                  {a.points.map((pt, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-neutral-600"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-300" />
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

function Feed() {
  return (
    <Section id="feed" eyebrow="Instagram" title="From @noidaycocat">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-prose text-neutral-600">
          {instagram.bio} <span className="text-neutral-400">·</span>{" "}
          <span className="font-medium text-accent-600">{instagram.followers} followers</span>
        </p>
        <a
          href={instagram.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-accent-300/60 bg-white px-4 py-2 text-sm font-medium text-accent-700 shadow-sm transition-colors hover:bg-accent-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
        >
          <Instagram className="size-4" />
          Follow {instagram.handle}
        </a>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
        {instagram.posts.map((post, i) => (
          <a
            key={i}
            href={post.href}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-square overflow-hidden rounded-2xl border border-accent-200/60 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
          >
            <ImageWithFallback
              src={post.image}
              alt={post.caption}
              className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              fallback={
                <span className="flex size-full flex-col items-center justify-center gap-2 bg-linear-to-br from-accent-100 to-accent-200 text-accent-500">
                  <Instagram className="size-7" />
                  <span className="px-3 text-center text-xs font-medium">{post.caption}</span>
                </span>
              }
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-accent-900/60 to-transparent p-3 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {post.caption}
            </span>
          </a>
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
            className="rounded-2xl border border-accent-200/60 bg-white p-6 shadow-sm"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
              {s.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-accent-50 px-3 py-1.5 text-sm text-accent-800"
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
    label === "Instagram"
      ? Instagram
      : label === "TikTok"
        ? Music2
        : label === "LinkedIn"
          ? Linkedin
          : Mail;
  return (
    <Section id="contact" eyebrow="Contact" title="Let's connect">
      <div className="rounded-2xl bg-linear-to-br from-accent-100 to-accent-200/70 p-8 md:p-12">
        <p className="max-w-prose text-lg leading-relaxed text-accent-900/80">
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
                className="inline-flex items-center gap-2 rounded-xl border border-accent-300/60 bg-white/70 px-4 py-2.5 text-sm font-medium text-accent-800 shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
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
    <div className="min-h-screen bg-cream font-sans text-neutral-800 antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Feed />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-accent-200/60 py-8">
        <div className="mx-auto max-w-5xl px-4 text-sm text-neutral-500 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {profile.name}. Built with care.
        </div>
      </footer>
    </div>
  );
}
