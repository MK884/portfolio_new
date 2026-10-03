import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
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
    company: "Vishleshan Software Solutions",
    period: "Jul 2025 – Present",
    year: "2025",
    description:
      "Building production-ready mobile applications and user experiences using React Native and TypeScript.",
    responsibilities: [
      "Developing and maintaining cross-platform mobile applications.",
      "Building reusable components and interactive user interfaces.",
      "Working with APIs, state management and production deployments.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "REST APIs",
    ],
    logo: "/companies/vishleshan.png",
    companyUrl: "#",
    current: true,
  },

  {
    id: 2,
    role: "Full Stack Developer",
    company: "Nexsify Pvt. Ltd.",
    period: "Jan 2024 – May 2025",
    year: "2024",
    description:
      "Worked across web applications, backend services and real-time systems, contributing to production applications.",
    responsibilities: [
      "Built frontend applications using React and TypeScript.",
      "Developed backend services using Node.js and Express.",
      "Worked with MongoDB and real-time application workflows.",
    ],
    technologies: [
      "React",
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
    year: "2022",
    description:
      "Worked on full-stack web development while gaining hands-on experience building and maintaining application features.",
    responsibilities: [
      "Developed frontend interfaces and application features.",
      "Worked with REST APIs and backend services.",
      "Collaborated with the development team on production tasks.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "MongoDB",
    ],
    logo: "/companies/softdigits.png",
    companyUrl: "#",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        min-w-dvwx
        overflow-hidden
        border-t
        border-[var(--border)]
        py-24
        sm:py-32
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="mb-20 sm:mb-28">
          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[var(--muted)]
            "
          >
            03 / Experience
          </span>

          <h2
            className="
              mt-5
              max-w-3xl
              text-4xl
              font-semibold
              tracking-[-0.05em]
              text-[var(--foreground)]
              sm:text-6xl
              lg:text-7xl
            "
          >
            Work
            <span className="font-serif font-normal italic">
              {" "}experience.
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-[var(--muted)]
              sm:text-base
            "
          >
            A look at the teams, products and technologies
            I've worked with throughout my career.
          </p>
        </div>

        {/* ================================================= */}
        {/* TIMELINE */}
        {/* ================================================= */}

        <div className="relative">

          {/* Central line — desktop */}
          <div
  className="
    pointer-events-none
    absolute
    left-1/2
    top-0
    hidden
    h-full
    w-px
    -translate-x-1/2
    bg-[var(--border)]
    lg:block
  "
/>

          {/* Mobile line */}
          <div
  className="
    pointer-events-none
    absolute
    left-[7px]
    top-0
    h-full
    w-px
    bg-[var(--border)]
    lg:hidden
  "
/>

          <div className="space-y-20 sm:space-y-28">

            {experiences.map((experience, index) => {
              const isLeft = index % 2 === 0;

              return (
                <ExperienceItem
                  key={experience.id}
                  experience={experience}
                  isLeft={isLeft}
                />
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  experience,
  isLeft,
}: {
  experience: Experience;
  isLeft: boolean;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      {/* ================================================= */}
      {/* DESKTOP */}
      {/* ================================================= */}

      <div
        className="
          hidden
          lg:grid
          lg:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)]
          lg:items-center
        "
      >
        {/* LEFT CONTENT */}
        <div className="min-w-0">
          {isLeft ? (
            <ExperienceInfo
              experience={experience}
              align="right"
            />
          ) : (
            <ExperienceDescription
              experience={experience}
              align="right"
            />
          )}
        </div>

        {/* CENTER TIMELINE */}
        <div className="relative flex h-full items-start justify-center">
          <TimelineNode experience={experience} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="min-w-0">
          {!isLeft ? (
            <ExperienceInfo
              experience={experience}
              align="left"
            />
          ) : (
            <ExperienceDescription
              experience={experience}
              align="left"
            />
          )}
        </div>
      </div>

      {/* ================================================= */}
      {/* MOBILE */}
      {/* ================================================= */}

      <div className="relative pl-8 lg:hidden">
        <div className="absolute left-0 top-1">
          <TimelineNode
            experience={experience}
            mobile
          />
        </div>

        <ExperienceInfo
          experience={experience}
          align="left"
        />

        <ExperienceDescription
          experience={experience}
          align="left"
        />
      </div>
    </motion.article>
  );
}

/* ================================================= */
/* EXPERIENCE INFO */
/* ================================================= */

function ExperienceInfo({
  experience,
  align,
}: {
  experience: Experience;
  align: "left" | "right";
}) {
  return (
    <div
      className={`
        ${align === "right" ? "lg:text-right" : ""}
      `}
    >

      {/* Year */}
      <div
        className={`
          mb-5
          font-mono
          text-4xl
          font-semibold
          tracking-[-0.06em]
          text-[var(--foreground)]
          sm:text-5xl
        `}
      >
        {experience.year}
      </div>

      {/* Role */}
      <div
        className="
          flex
          items-center
          gap-2
          text-xl
          font-semibold
          tracking-[-0.03em]
          text-[var(--foreground)]
          sm:text-2xl
        "
      >
        <span>{experience.role}</span>

        {experience.current && (
          <span
            className="
              relative
              inline-flex
              h-2
              w-2
            "
          >
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-[var(--accent)]
                opacity-60
              "
            />

            <span
              className="
                relative
                inline-flex
                h-2
                w-2
                rounded-full
                bg-[var(--accent)]
              "
            />
          </span>
        )}
      </div>

      {/* Company */}
      <div
        className="
          mt-2
          text-sm
          font-medium
          text-[var(--accent)]
        "
      >
        {experience.company}
      </div>

      {/* Period */}
      <div
        className="
          mt-2
          font-mono
          text-[10px]
          uppercase
          tracking-[0.12em]
          text-[var(--muted)]
        "
      >
        {experience.period}
      </div>
    </div>
  );
}

/* ================================================= */
/* DESCRIPTION */
/* ================================================= */

function ExperienceDescription({
  experience,
  align = "left",
}: {
  experience: Experience;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`
        mt-7
        ${align === "right" ? "lg:text-right" : ""}
        lg:mt-0
      `}
    >

      <p
        className="
          max-w-xl
          text-sm
          leading-7
          text-[var(--muted)]
          sm:text-base
        "
      >
        {experience.description}
      </p>

      {experience.responsibilities &&
        experience.responsibilities.length > 0 && (
          <ul
            className={`
              mt-6
              space-y-3
              ${align === "right"
                ? "lg:flex lg:flex-col lg:items-end"
                : ""
              }
            `}
          >
            {experience.responsibilities.map(
              (item) => (
                <li
                  key={item}
                  className="
                    flex
                    max-w-xl
                    gap-3
                    text-xs
                    leading-6
                    text-[var(--muted)]
                    sm:text-sm
                  "
                >
                  <span
                    className="
                      mt-[9px]
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-[var(--accent)]
                    "
                  />

                  <span>{item}</span>
                </li>
              )
            )}
          </ul>
        )}

      {/* Technologies */}
      <div
        className={`
          mt-7
          flex
          flex-wrap
          gap-2
          ${align === "right"
            ? "lg:justify-end"
            : ""
          }
        `}
      >
        {experience.technologies.map(
          (technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border
                border-[var(--border)]
                px-3
                py-1.5
                font-mono
                text-[9px]
                uppercase
                tracking-[0.08em]
                text-[var(--muted)]
                transition-colors
                duration-300
                hover:border-[var(--accent)]
                hover:text-[var(--foreground)]
              "
            >
              {technology}
            </span>
          )
        )}
      </div>

      {/* Company link */}
      {experience.companyUrl && (
        <a
          href={experience.companyUrl}
          target="_blank"
          rel="noreferrer"
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            font-mono
            text-[10px]
            uppercase
            tracking-[0.12em]
            text-[var(--muted)]
            transition-colors
            hover:text-[var(--foreground)]
          "
        >
          View company
          <ArrowUpRight className="h-3 w-3" />
        </a>
      )}
    </div>
  );
}

/* ================================================= */
/* TIMELINE NODE */
/* ================================================= */

function TimelineNode({
  experience,
  mobile = false,
}: {
  experience: Experience;
  mobile?: boolean;
}) {
  return (
    <div
      className={`
        relative
        z-20
        flex
        items-center
        justify-center
        ${
          mobile
            ? "h-4 w-4"
            : "mx-auto h-[52px] w-[52px]"
        }
      `}
    >

      {/* Glow */}
      {experience.current && (
        <motion.span
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            h-14
            w-14
            rounded-full
            bg-[var(--accent)]
            blur-xl
          "
        />
      )}

      {/* Node */}
      <div
        className={`
          relative
          flex
          items-center
          justify-center
          rounded-full
          border
          border-[var(--border)]
          bg-[var(--bg)]
          ${
            mobile
              ? "h-3 w-3"
              : "h-11 w-11"
          }
        `}
      >
        {experience.logo ? (
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            className={`
              rounded-full
              object-contain
              ${
                mobile
                  ? "h-2 w-2"
                  : "h-7 w-7"
              }
            `}
          />
        ) : (
          <span
            className={`
              rounded-full
              bg-[var(--accent)]
              ${
                mobile
                  ? "h-1.5 w-1.5"
                  : "h-2.5 w-2.5"
              }
            `}
          />
        )}
      </div>
    </div>
  );
}