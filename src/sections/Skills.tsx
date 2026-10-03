import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ArrowUpRight, Shuffle, X } from "lucide-react";

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiExpo,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiDocker,
  SiVite,
  SiCss,
  SiZedindustries,
  SiPython,
  SiCplusplus,
  SiJira,
  SiDjango,
  SiFastapi,
} from "react-icons/si";
import { GiHorseHead } from "react-icons/gi";

type Level = "Primary" | "Working" | "Familiar";

type Skill = {
  name: string;
  category: string;
  icon: React.ElementType;
  color: string;
  description?: string;
  level?: Level;
};

const skills: Skill[] = [
  {
    name: "React",
    category: "Frontend",
    icon: SiReact,
    color: "#61DAFB",
    description: "Building component-driven web interfaces and applications.",
    level: "Primary",
  },
  {
    name: "React Native",
    category: "Mobile",
    icon: SiReact,
    color: "#61DAFB",
    description: "Building cross-platform mobile applications.",
    level: "Primary",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: SiTypescript,
    color: "#3178C6",
    description: "Type-safe application development across web and mobile.",
    level: "Primary",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: SiJavascript,
    color: "#F7DF1E",
    description: "Modern JavaScript for frontend and backend applications.",
    level: "Primary",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: SiNextdotjs,
    color: "#ffffff",
    description: "React framework for production-ready web applications.",
    level: "Working",
  },
  {
    name: "C++",
    category: "Backend",
    icon: SiCplusplus,
    color: "#00599C",
    description: "Problem solving and performance-minded programming.",
    level: "Working",
  },
  {
    name: "HTML",
    category: "Frontend",
    icon: SiHtml5,
    color: "#E34F26",
    description: "Semantic and accessible web markup.",
    level: "Primary",
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: SiCss,
    color: "#1572B6",
    description: "Responsive layouts, animations and modern styling.",
    level: "Primary",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: SiTailwindcss,
    color: "#06B6D4",
    description: "Utility-first styling for responsive interfaces.",
    level: "Primary",
  },
  {
    name: "Reanimated",
    category: "Frontend",
    icon: GiHorseHead,
    color: "#b07eff",
    description: "Smooth, native-driven animations in React Native.",
    level: "Primary",
  },

  {
    name: "Node.js",
    category: "Backend",
    icon: SiNodedotjs,
    color: "#339933",
    description: "JavaScript runtime for backend services and APIs.",
    level: "Working",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: SiExpress,
    color: "#ffffff",
    description: "REST APIs and backend services.",
    level: "Working",
  },
  {
    name: "NestJS",
    category: "Backend",
    icon: SiNestjs,
    color: "#E0234E",
    description: "Structured and scalable Node.js backend applications.",
    level: "Working",
  },
  {
    name: "Python",
    category: "Backend",
    icon: SiPython,
    color: "#3776AB",
    description: "Scripting and backend applications.",
    level: "Working",
  },
  {
    name: "Django",
    category: "Backend",
    icon: SiDjango,
    color: "#074b32",
    description: "High-level Python web framework.",
    level: "Familiar",
  },
  {
    name: "FastAPI",
    category: "Backend",
    icon: SiFastapi,
    color: "#039384",
    description: "Fast web framework for building APIs with Python.",
    level: "Familiar",
  },
  {
    name: "Prisma",
    category: "Backend",
    icon: SiPrisma,
    color: "#5A67D8",
    description: "Type-safe database access and ORM.",
    level: "Working",
  },
  {
    name: "MongoDB",
    category: "Backend",
    icon: SiMongodb,
    color: "#47A248",
    description: "Document-oriented database development.",
    level: "Working",
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    icon: SiPostgresql,
    color: "#4169E1",
    description: "Relational database design and development.",
    level: "Working",
  },

  {
    name: "Expo",
    category: "Mobile",
    icon: SiExpo,
    color: "#ffffff",
    description: "React Native development and mobile workflows.",
    level: "Working",
  },
  {
    name: "Firebase",
    category: "Mobile",
    icon: SiFirebase,
    color: "#FFCA28",
    description: "Authentication, notifications and cloud services.",
    level: "Working",
  },
  {
    name: "Zustand",
    category: "Mobile",
    icon: SiZedindustries,
    color: "#ffffff",
    description: "Lightweight state management for React applications.",
    level: "Working",
  },

  {
    name: "Git",
    category: "Tools",
    icon: SiGit,
    color: "#F05032",
    description: "Version control and collaborative development.",
    level: "Primary",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: SiGithub,
    color: "#ffffff",
    description: "Source control, collaboration and open source.",
    level: "Primary",
  },
  {
    name: "Figma",
    category: "Design",
    icon: SiFigma,
    color: "#F24E1E",
    description: "UI exploration, design handoff and prototyping.",
    level: "Working",
  },
  {
    name: "Postman",
    category: "Tools",
    icon: SiPostman,
    color: "#FF6C37",
    description: "API development and testing.",
    level: "Primary",
  },
  {
    name: "Docker",
    category: "Tools",
    icon: SiDocker,
    color: "#2496ED",
    description: "Containerized development environments.",
    level: "Familiar",
  },
  {
    name: "Vite",
    category: "Tools",
    icon: SiVite,
    color: "#646CFF",
    description: "Fast modern frontend tooling.",
    level: "Primary",
  },
  {
    name: "Jira",
    category: "Tools",
    icon: SiJira,
    color: "#1968db",
    description: "Project management and sprint tracking.",
    level: "Primary",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(skills.map((s) => s.category))),
];

const levels: Level[] = ["Primary", "Working", "Familiar"];

// Primary = 3 bars, Working = 2, Familiar = 1
const levelValue: Record<Level, number> = {
  Primary: 3,
  Working: 2,
  Familiar: 1,
};

/* Three small bars showing the skill level */
function LevelBars({ level, color }: { level?: Level; color: string }) {
  if (!level) return null;

  return (
    <div className="flex gap-0.5" title={level}>
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className="h-1 w-3 rounded-full"
          style={{
            backgroundColor: i <= levelValue[level] ? color : "var(--border)",
          }}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [levelFilter, setLevelFilter] = useState<Level | null>(null);
  const [search, setSearch] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesCategory =
        activeCategory === "All" || skill.category === activeCategory;
      const matchesLevel = !levelFilter || skill.level === levelFilter;
      const matchesSearch = skill.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesLevel && matchesSearch;
    });
  }, [activeCategory, levelFilter, search]);

  const categoryCount = (category: string) =>
    category === "All"
      ? skills.length
      : skills.filter((s) => s.category === category).length;

  const levelCount = (level: Level) =>
    skills.filter((s) => s.level === level).length;

  // Other skills from the same category as the selected one
  const related = selectedSkill
    ? skills.filter(
        (s) =>
          s.category === selectedSkill.category &&
          s.name !== selectedSkill.name,
      )
    : [];

  // Clears every filter so the random pick is always visible in the grid
  const surpriseMe = () => {
    const pool = skills.filter((s) => s.name !== selectedSkill?.name);
    const pick = pool[Math.floor(Math.random() * pool.length)];

    setActiveCategory("All");
    setLevelFilter(null);
    setSearch("");
    setSelectedSkill(pick);
  };

  // Moves the spotlight on the card to follow the cursor
  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mx",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--my",
      `${event.clientY - rect.top}px`,
    );
  };

  return (
    <section
      id="skills"
      className="relative min-w-dvw border-t border-[var(--border)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* HEADER */}
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
              02 / Skills
            </span>

            <h2 className="mt-5 max-w-2xl text-3xl font-medium tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
              Tools I use to
              <span className="font-serif italic"> build things.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)]">
              A collection of technologies, tools and platforms I use across
              web, mobile and product development.
            </p>
          </div>

          {/* Level legend. Click one to filter, click again to clear. */}
          <div className="flex gap-2">
            {levels.map((level) => {
              const active = levelFilter === level;

              return (
                <button
                  key={level}
                  type="button"
                  onClick={() => setLevelFilter(active ? null : level)}
                  className={`rounded-xl border px-3 py-2.5 text-left transition-colors duration-200 cursor-pointer ${
                    active
                      ? "border-[var(--accent)] bg-[var(--surface)]"
                      : "border-[var(--border)] hover:border-[var(--muted)]"
                  }`}
                >
                  <LevelBars level={level} color="var(--accent)" />
                  <p className="mt-2 text-lg font-semibold leading-none text-[var(--foreground)]">
                    {levelCount(level)}
                  </p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--muted)]">
                    {level}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTROLS */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Categories */}
          <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className="cursor-pointer relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-200"
                  style={{
                    color: active ? "var(--foreground)" : "var(--muted)",
                  }}
                >
                  {active && (
                    <motion.span
                      layoutId="active-category"
                      className="absolute inset-0 rounded-full border border-[var(--border)] bg-[var(--surface)]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">{category}</span>
                  <span className="relative z-10 text-[9px] opacity-50">
                    {categoryCount(category)}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative w-full lg:w-56">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--muted)]" />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search skills..."
                className="w-full rounded-full border border-[var(--border)] bg-[var(--surface)] py-2.5 pl-10 pr-9 text-xs text-[var(--foreground)] outline-none transition-all placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Random pick */}
            <button
              type="button"
              onClick={surpriseMe}
              className="cursor-pointer flex shrink-0 items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            >
              <Shuffle className="h-3.5 w-3.5" />
              Surprise me
            </button>
          </div>
        </div>

        {/* SELECTED SKILL (above the grid so it is always visible) */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div
                className="mb-4 rounded-xl border bg-[var(--surface)] p-5"
                style={{ borderColor: selectedSkill.color }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--border)]">
                      <selectedSkill.icon
                        className="h-5 w-5"
                        style={{ color: selectedSkill.color }}
                      />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-sm font-medium text-[var(--foreground)]">
                          {selectedSkill.name}
                        </h3>

                        <LevelBars
                          level={selectedSkill.level}
                          color={selectedSkill.color}
                        />

                        {selectedSkill.level && (
                          <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--muted)]">
                            {selectedSkill.level}
                          </span>
                        )}
                      </div>

                      {selectedSkill.description && (
                        <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                          {selectedSkill.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedSkill(null)}
                    aria-label="Close"
                    className="cursor-pointer shrink-0 rounded-full border border-[var(--border)] p-2 text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Related skills: click to jump to one */}
                {related.length > 0 && (
                  <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[var(--border)] pt-4">
                    <span className="mr-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--muted)]">
                      Also in {selectedSkill.category}
                    </span>

                    {related.map((skill) => (
                      <button
                        key={skill.name}
                        type="button"
                        onClick={() => setSelectedSkill(skill)}
                        className="cursor-pointer flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:border-[var(--muted)] hover:text-[var(--foreground)]"
                      >
                        <skill.icon
                          className="h-3 w-3"
                          style={{ color: skill.color }}
                        />
                        {skill.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SKILLS GRID */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              const selected = selectedSkill?.name === skill.name;

              return (
                <motion.button
                  key={skill.name}
                  type="button"
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedSkill(skill)}
                  onMouseMove={handleMove}
                  className={`cursor-pointer group relative flex min-h-[100px] flex-col items-start justify-between overflow-hidden rounded-xl border bg-[var(--surface)] p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[var(--skill-color)] ${
                    selected
                      ? "border-[var(--skill-color)]"
                      : "border-[var(--border)]"
                  }`}
                  style={
                    { "--skill-color": skill.color } as React.CSSProperties
                  }
                >
                  {/* Spotlight that follows the cursor */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(140px circle at var(--mx, 50%) var(--my, 50%), ${skill.color}30, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10 flex w-full items-start justify-between">
                    <Icon
                      className={`h-5 w-5 transition-all duration-300 group-hover:text-[var(--skill-color)] group-hover:opacity-100 group-hover:grayscale-0 ${
                        selected
                          ? "text-[var(--skill-color)] opacity-100"
                          : "text-[var(--muted)] opacity-60 grayscale"
                      }`}
                    />

                    <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 translate-y-1 text-[var(--muted)] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                  </div>

                  <div className="relative z-10 flex w-full items-end justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium text-[var(--foreground)]">
                        {skill.name}
                      </p>

                      <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--muted)]">
                        {skill.category}
                      </p>
                    </div>

                    <div className="opacity-50 transition-opacity duration-300 group-hover:opacity-100">
                      <LevelBars level={skill.level} color={skill.color} />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredSkills.length === 0 && (
          <div className="flex min-h-[180px] items-center justify-center rounded-xl border border-dashed border-[var(--border)] text-sm text-[var(--muted)]">
            No skills found. Try clearing a filter.
          </div>
        )}
      </div>
    </section>
  );
}
