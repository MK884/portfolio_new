import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import vssLogo from "../assets/companies/vss.png";
import softDigitsLogo from "../assets/companies/soft_digits.png";

type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  start: string; // "YYYY-MM", used for the duration pill
  end?: string; // "YYYY-MM", leave empty for current role
  year: string;
  description: string;
  responsibilities?: string[];
  technologies: string[];
  logo?: string;
  companyUrl?: string;
  current?: boolean;
};

const experiences: Experience[] = [
  {
    id: 1,
    role: "React Native Developer",
    company: "Vishleshan Software Solutions Pvt. Ltd",
    period: "Jul 2025 – Present",
    start: "2025-07",
    year: "2026",
    description:
      "Building production-ready mobile applications and user experiences using React Native",
    responsibilities: [
      "Developing and maintaining cross-platform mobile applications.",
      "Collaborating with Team and product managers to deliver high-quality user experiences.",
      "Working with APIs, state management and production deployments.",
      "Building reusable components and interactive user interfaces.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "REST APIs",
      "Firebase",
      "Redux",
      "Reanimated",
      "React Query",
    ],
    logo: vssLogo,
    companyUrl: "https://vishleshan.ai/",
    current: true,
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Nexsify Pvt. Ltd.",
    period: "Jan 2025 – May 2025",
    start: "2025-01",
    end: "2025-05",
    year: "2025",
    description:
      "Worked across web applications, mobile applications, backend services and real-time systems, contributing to production applications.",
    responsibilities: [
      "Built frontend applications using React and TypeScript.",
      "Built mobile applications using React Native and TypeScript.",
      "Developed backend services using Node.js and Express.",
      "Worked with MongoDB and real-time application workflows.",
    ],
    technologies: [
      "React",
      "React Native",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
    ],
    logo: "/companies/nexsify.png",
    companyUrl: "#",
  },
  {
    id: 3,
    role: "Full Stack Developer Intern",
    company: "SoftDigits",
    period: "Jul 2022 – Jan 2023",
    start: "2022-07",
    end: "2023-01",
    year: "2022",
    description:
      "Worked on full-stack web development while gaining hands-on experience building and maintaining application features.",
    responsibilities: [
      "Developed frontend interfaces and application features.",
      "Worked with REST APIs and backend services.",
      "Collaborated with the development team on production tasks.",
    ],
    technologies: [
      "JavaScript",
      "HTML",
      "SCSS",
      "CSS",
      "PHP",
      "MySQL",
      "CodeIgniter4",
    ],
    logo: softDigitsLogo,
    companyUrl: "https://softdigit.in/",
  },
];

// "2025-07" -> "1 yr 3 mo". Current roles keep counting up to today.
const getDuration = (start: string, end?: string) => {
  const s = new Date(`${start}-01`);
  const e = end ? new Date(`${end}-01`) : new Date();
  const months =
    (e.getFullYear() - s.getFullYear()) * 12 + e.getMonth() - s.getMonth() + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;

  return [
    years > 0 && `${years} yr${years > 1 ? "s" : ""}`,
    rest > 0 && `${rest} mo`,
  ]
    .filter(Boolean)
    .join(" ");
};

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // 0 -> 1 as the timeline scrolls past 60% of the screen height
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 60%", "end 60%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <section
      id="experience"
      className="relative min-w-dvw overflow-hidden border-t border-[var(--border)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* HEADER */}
        <div className="mb-20 sm:mb-28">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
            04 / Experience
          </span>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            Work
            <span className="font-serif font-normal italic"> experience.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            A look at the teams, products and technologies I've worked with
            throughout my career.
          </p>
        </div>

        {/* TIMELINE */}
        <div ref={timelineRef} className="relative">
          {/* Desktop line (centre) and mobile line (left). Same animation. */}
          <TimelineLine
            progress={progress}
            className="left-1/2 hidden lg:block"
          />
          <TimelineLine progress={progress} className="left-[22px] lg:hidden" />

          <div className="space-y-20 sm:space-y-28">
            {experiences.map((experience) => (
              <ExperienceItem key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Grey track + accent fill + travelling dot */
function TimelineLine({
  progress,
  className,
}: {
  progress: MotionValue<number>;
  className: string;
}) {
  const dotTop = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <div
      className={`pointer-events-none absolute top-0 h-full w-px -translate-x-1/2 ${className}`}
    >
      <div className="absolute inset-0 bg-[var(--border)]" />

      <motion.div
        style={{ scaleY: progress }}
        className="absolute inset-0 origin-top bg-[var(--accent)]"
      />

      <motion.span
        style={{ top: dotTop }}
        className="absolute left-1/2 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_20px_4px_var(--accent)]"
      />
    </div>
  );
}

function ExperienceItem({ experience }: { experience: Experience }) {
  const ref = useRef<HTMLElement>(null);

  // true once this role reaches the same 60% mark the line uses
  const reached = useInView(ref, { once: true, margin: "0px 0px -40% 0px" });

  return (
    <motion.article
      ref={ref}
      animate={{ opacity: reached ? 1 : 0.35, y: reached ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* DESKTOP: details | line | description */}
      <div className="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)]">
        <div className="flex items-start justify-end gap-8">
          <Heading
            experience={experience}
            className="max-w-[18rem] text-right"
          />
          <Year year={experience.year} />
        </div>

        <div className="flex justify-center">
          <Node experience={experience} reached={reached} />
        </div>

        <div>
          <Details experience={experience} />
        </div>
      </div>

      {/* MOBILE: line on the left, everything stacked on the right */}
      <div className="relative pl-16 lg:hidden">
        <div className="absolute left-0 top-0">
          <Node experience={experience} reached={reached} small />
        </div>

        <Year year={experience.year} />
        <Heading experience={experience} className="mt-3" />
        <Details experience={experience} className="mt-6" />
      </div>
    </motion.article>
  );
}

function Year({ year }: { year: string }) {
  return (
    <div className="text-4xl font-semibold leading-none tracking-[-0.06em] text-[var(--foreground)] sm:text-5xl">
      {year}
    </div>
  );
}

function Heading({
  experience,
  className = "",
}: {
  experience: Experience;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-2xl">
        {experience.role}
      </h3>

      <div className="mt-2 text-sm font-medium text-[var(--accent)]">
        {experience.company}
      </div>

      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
        {experience.period}
      </div>

      {/* Duration pill, calculated automatically */}
      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">
        {experience.current && (
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          </span>
        )}
        {getDuration(experience.start, experience.end)}
        {experience.current && " · ongoing"}
      </div>
    </div>
  );
}

function Details({
  experience,
  className = "",
}: {
  experience: Experience;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="max-w-xl text-sm leading-7 text-[var(--foreground)] sm:text-base">
        {experience.description}
      </p>

      {experience.responsibilities && (
        <ul className="mt-6 space-y-3">
          {experience.responsibilities.map((item) => (
            <li
              key={item}
              className="flex max-w-xl gap-3 text-xs leading-6 text-[var(--muted)] sm:text-sm"
            >
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-7 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-[var(--border)] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.08em] text-[var(--muted)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--foreground)]"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Only shows when you set a real URL instead of "#" */}
      {experience.companyUrl && experience.companyUrl !== "#" && (
        <a
          href={experience.companyUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
        >
          View company
          <ArrowUpRight className="h-3 w-3" />
        </a>
      )}
    </div>
  );
}

/* Logo circle on the line. Glows once the dot has reached it. */
function Node({
  experience,
  reached,
  small = false,
}: {
  experience: Experience;
  reached: boolean;
  small?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`
        relative z-20 flex items-center justify-center rounded-full border
        bg-[var(--bg)] transition-all duration-500
        ${small ? "h-11 w-11" : "h-[52px] w-[52px]"}
        ${
          reached
            ? "border-[var(--accent)] shadow-[0_0_28px_-4px_var(--accent)]"
            : "border-[var(--border)]"
        }
      `}
    >
      {experience.logo && !failed ? (
        <img
          src={experience.logo}
          alt={`${experience.company} logo`}
          onError={() => setFailed(true)}
          className={`rounded-full object-contain bg-white w-full h-full`}
        />
      ) : (
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
      )}
    </div>
  );
}
