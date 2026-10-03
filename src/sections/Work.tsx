import { useEffect, useState } from "react";
import { AnimatePresence, animate, motion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/Button";
import stylishImage from "../assets/projects/stylish.png";
import wallPieImage from "../assets/projects/wallpie.png";
import wrapperImage from "../assets/projects/link_creation.png";
import promptopiaImage from "../assets/projects/promptopia.png";
import havellsImage from "../assets/projects/havells.png";
import fleetVerseImage from "../assets/projects/fleet_verse.png";

type ProjectAction = {
  label: string;
  href: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  actions: ProjectAction[];
  users?: number; // active users (placeholder, replace with your real numbers)
  growth?: number[]; // 12 values, one per month (any scale, bars are normalised)
  label?: string;
};

const projects: Project[] = [
  {
    id: 1,

    title: "Havells Serv+IQ",

    description:
      "A field service management mobile application built for Havells India Limited, helping service partners manage jobs, AMC orders, customer details, attendance, and field operations.",

    image: havellsImage,

    tech: ["React Native", "JavaScript", "REST APIs", "Firebase"],

    actions: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.havells.techapp&hl=en_IN",
      },
      {
        label: "iOS",
        href: "https://apps.apple.com/in/app/havells-serv-iq/id6748066253",
      },
    ],

    label: "Professional Project",
    users: 20000,
  },
  {
    id: 2,

    title: "Tata Motors Fleet Verse",

    description:
      "A comprehensive e-commerce mobile application for Tata Motors commercial vehicles, bringing vehicle discovery, comparison, financing, dealer discovery, and vehicle configuration into one digital experience.",

    image: fleetVerseImage,

    tech: ["React Native", "JavaScript", "REST APIs", "Firebase"],

    actions: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.tatamotors.fleetverse&hl=en_IN",
      },
      {
        label: "iOS",
        href: "https://apps.apple.com/in/app/fleetverse/id6698877922",
      },
    ],

    users: 50000,

    label: "Professional Project",
  },
  {
    id: 3,
    title: "Stylish",
    description:
      "A full-featured clothing store mobile application built with a modern and stylish design",
    image: stylishImage,
    tech: [
      "React Native",
      "Expo",
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "Reanimated",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    actions: [{ label: "GitHub", href: "https://github.com/MK884/stylish" }],
    // users: 12000,
    // growth: [2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10, 12],
    label: "Personal Project",
  },
  {
    id: 4,
    title: "WallPie",
    description:
      "WallPie is the go-to app for discovering and managing images, whether you're on the go with your mobile device or browsing from a web platform.",
    image: wallPieImage,
    tech: [
      "React Native",
      "Expo",
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "Reanimated",
      "REST API",
    ],
    actions: [
      { label: "Live Demo", href: "https://wallpie.vercel.app/" },
      { label: "GitHub", href: "https://github.com/MK884/wallpie" },
    ],
    // users: 250000,
    // growth: [10, 18, 30, 45, 60, 90, 120, 150, 180, 210, 230, 250],
    label: "Personal Project",
  },
  {
    id: 5,
    title: "Wrapper",
    description:
      "a full-stack application that allows users to create, manage, and customize short links effortlessly. Wrapper also provides a powerful analytics dashboard to track and visualize clicks based on location, device type, and more.",
    image: wrapperImage,
    tech: [
      "React",
      "TypeScript",
      "SCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Rest api",
    ],
    actions: [
      { label: "Live Demo", href: "https://wrapper-mk.vercel.app/" },
      { label: "GitHub", href: "https://github.com/MK884/wrapper" },
    ],
    // users: 40000,
    // growth: [4, 6, 9, 12, 15, 18, 22, 26, 30, 34, 37, 40],
    label: "Personal Project",
  },
  {
    id: 6,
    title: "Promptopia",
    description:
      "Promptopia is an open-source AI Prompting tool for modern world to discover, create and share creative prompts.",
    image: promptopiaImage,
    tech: ["Next.js", "Tailwind", "Typescript", "Node.js", "MongoDB"],
    actions: [
      { label: "Live Demo", href: "https://promtopia-drab.vercel.app/" },
      { label: "GitHub", href: "https://github.com/MK884/promts" },
    ],
    // users: 8000,
    // growth: [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8],
    label: "Personal Project",
  },
];

const SLIDE_DURATION = 6000;

// 1200 -> "1K", 250000 -> "250K", 1500000 -> "1.5M"
const formatUsers = (n: number) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(".0", "")}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
  return `${Math.round(n)}`;
};

// const totalUsers = projects.reduce((sum, p) => sum + p?.users, 0);

const totalUsers = projects.reduce(
  (sum, project) => sum + (project.users ?? 0),
  0,
);

// Counts up from 0 whenever `value` changes
function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: setDisplay,
    });
    return () => controls.stop();
  }, [value]);

  return <>{formatUsers(display)}</>;
}

// Glass card shown on top of the slide
function UsersCard({ project }: { project: Project }) {
  if (project.users === undefined) {
    return null;
  }
  // const [hovered, setHovered] = useState<number | null>(null);
  // const max = Math.max(...project.growth);

  return (
    <div className="w-44 rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur-md sm:w-56 sm:p-5">
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
        {/* live pulse */}
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
        </span>
        Active users
      </div>

      <p className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        <AnimatedNumber value={project?.users} />+
      </p>

      {/* Growth bars. Hover a bar to see that month's value */}
      {/* <div className="mt-4 flex h-12 items-end gap-1">
        {project.growth.map((value, i) => (
          <motion.span
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            initial={{ height: 0 }}
            animate={{ height: `${(value / max) * 100}%` }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.04 }}
            className={`flex-1 rounded-sm transition-colors ${
              hovered === i || (hovered === null && i === project.growth.length - 1)
                ? "bg-[var(--accent)]"
                : "bg-white/30"
            }`}
          />
        ))}
      </div>

      <p className="mt-2 font-mono text-[10px] text-white/50">
        {hovered === null ? "Last 12 months" : `Month ${hovered + 1}`}
      </p> */}
    </div>
  );
}

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeProject = projects[activeIndex];

  const goToProject = (index: number) => {
    if (index < 0) {
      setActiveIndex(projects.length - 1);
      return;
    }

    if (index >= projects.length) {
      setActiveIndex(0);
      return;
    }

    setActiveIndex(index);
  };

  // Auto slide
  useEffect(() => {
    if (isPaused) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused]);

  return (
    <section id="work" className="min-w-dvw border-t border-[var(--border)] ">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
              03 / Work
            </span>

            <h2 className="mt-4 text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Selected work
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
            A selection of products, interfaces and experiences I've built.
          </p>
        </div>

        {/* Reach bar: each segment's width follows that product's users.
            Click a segment to jump to the project. */}
        <div className="mb-6">
          <div className="mb-3 flex items-baseline justify-between">
            <p className="text-sm text-[var(--muted)]">
              Combined reach across {projects.length} products
            </p>
            <p className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              {formatUsers(totalUsers)}+
              <span className="ml-2 font-mono text-[10px] font-normal uppercase tracking-[0.12em] text-[var(--muted)]">
                users
              </span>
            </p>
          </div>

          {/* <div className="flex gap-1.5">
            {projects.map((project, index) => {
              const active = index === activeIndex;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${project.title}, ${formatUsers(project.users)} users`}
                  // sqrt keeps small projects visible next to big ones
                  style={{ flexGrow: Math.sqrt(project.users), flexBasis: 0 }}
                  className={`min-w-0 rounded-lg border px-3 py-2 text-left transition-colors duration-300 ${
                    active
                      ? "border-[var(--accent)] bg-[var(--accent)]/15"
                      : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--muted)]"
                  }`}
                >
                  <span className="block truncate font-mono text-[10px] uppercase tracking-wide text-[var(--muted)]">
                    {project.title}
                  </span>
                  <span className="block text-sm font-medium text-[var(--foreground)]">
                    {formatUsers(project.users)}
                  </span>
                </button>
              );
            })}
          </div> */}
        </div>

        {/* Full Background Carousel */}
        <div
          className="relative h-[650px] w-full overflow-hidden rounded-2xl border border-[var(--border)] sm:h-[700px] lg:h-[720px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Project Number */}
          <div className="absolute left-6 top-6 z-10 sm:left-8 sm:top-8">
            <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 font-mono text-xs text-white backdrop-blur-md">
              {String(activeProject.id).padStart(2, "0")}
            </span>
          </div>

          {/* Active users card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="absolute right-6 top-6 z-10 sm:right-8 sm:top-8"
            >
              <UsersCard project={activeProject} />
            </motion.div>
          </AnimatePresence>

          {/* Project Content */}
          <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{
                  duration: 0.45,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-2xl"
              >
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/60">
                  {activeProject?.label ?? "Featured Project"}
                </p>

                <h3 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {activeProject.title}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                  {activeProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeProject.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-white/80 backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {activeProject.actions.map((action, index) => (
                    <Button
                      key={action.label}
                      variant={index === 0 ? "primary" : "secondary"}
                      size="sm"
                      icon={<ArrowUpRight size={15} />}
                      iconPosition="right"
                      onClick={() => {
                        window.open(
                          action.href,
                          "_blank",
                          "noopener,noreferrer",
                        );
                      }}
                      className="cursor-pointer"
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation */}
            <div className="mt-10 flex items-end justify-between">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => goToProject(activeIndex - 1)}
                  aria-label="Previous project"
                  className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition hover:bg-white/10"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={() => goToProject(activeIndex + 1)}
                  aria-label="Next project"
                  className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition hover:bg-white/10"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Timeline */}
              <div className="flex items-center gap-2">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to ${project.title}`}
                    className="cursor-pointer group relative h-6 w-10 overflow-hidden"
                  >
                    <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-white/25" />

                    {index === activeIndex && !isPaused && (
                      <motion.span
                        key={activeProject.id}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: SLIDE_DURATION / 1000,
                          ease: "linear",
                        }}
                        className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-white"
                      />
                    )}

                    {index === activeIndex && isPaused && (
                      <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-white" />
                    )}

                    {index !== activeIndex && (
                      <span className="absolute left-0 top-1/2 h-0.5 w-0 -translate-y-1/2 rounded-full bg-white transition-all duration-300 group-hover:w-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="mt-5 flex justify-end">
          <p className="font-mono text-xs text-[var(--muted)]">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}
