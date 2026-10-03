import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/Button";
import stylishImage from "../assets/projects/stylish.png";
import wallPieImage from "../assets/projects/wallpie.png";
import wrapperImage from "../assets/projects/link_creation.png";
import promptopiaImage from "../assets/projects/promptopia.png";

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
};

const projects: Project[] = [
  {
    id: 1,
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
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/MK884/stylish",
      },
    ],
  },
  {
    id: 2,
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
      {
        label: "Live Demo",
        href: "https://wallpie.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/MK884/wallpie",
      },
    ],
  },
  {
    id: 3,
    title: "Wrapper",
    description:
      "a full-stack application that allows users to create, manage, and customize short links effortlessly. Wrapper also provides a powerful analytics dashboard to track and visualize clicks based on location, device type, and more.",
    image:
      wrapperImage,
    tech: ["React", "TypeScript", "SCSS", "Node.js", "Express.js", "MongoDB", "Rest api"],
    actions: [
      {
        label: "Live Demo",
        href: "https://wrapper-mk.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/MK884/wrapper",
      },
    ],
  },
  {
    id: 4,
    title: "Promptopia",
    description:
      "Promptopia is an open-source AI Prompting tool for modern world to discover, create and share creative prompts.",
    image:
      promptopiaImage,
    tech: ["Next.js","Tailwind","Typescript", "Node.js", "MongoDB"],
    actions: [
      {
        label: "Live Demo",
        href: "https://promtopia-drab.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/MK884/promts",
      },
    ],
  },
];

const slideVariants = {
  enter: {
    opacity: 0,
    x: 60,
  },
  center: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -60,
  },
};

const SLIDE_DURATION = 6000;

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
        <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[var(--accent)]
              "
            >
              02 / Work
            </span>

            <h2 className="mt-4 text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Selected work
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
            A selection of products, interfaces and experiences I've built.
          </p>
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
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="h-full w-full object-cover"
              />

              {/* Dark gradient */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Bottom content gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              {/* Side gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Project Number */}
          <div className="absolute left-6 top-6 z-10 sm:left-8 sm:top-8">
            <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 font-mono text-xs text-white backdrop-blur-md">
              {String(activeProject.id).padStart(2, "0")}
            </span>
          </div>

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
                {/* Small label */}
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/60">
                  Featured project
                </p>

                {/* Title */}
                <h3 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {activeProject.title}
                </h3>

                {/* Description */}
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                  {activeProject.description}
                </p>

                {/* Tech */}
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

                {/* Actions */}
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
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation */}
            <div className="mt-10 flex items-end justify-between">
              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => goToProject(activeIndex - 1)}
                  aria-label="Previous project"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition hover:bg-white/10"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={() => goToProject(activeIndex + 1)}
                  aria-label="Next project"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition hover:bg-white/10"
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
                    className="group relative h-6 w-10 overflow-hidden"
                  >
                    {/* Track */}
                    <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-white/25" />

                    {/* Progress */}
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

                    {/* Active paused */}
                    {index === activeIndex && isPaused && (
                      <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-white" />
                    )}

                    {/* Hover */}
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
