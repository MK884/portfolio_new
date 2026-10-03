import {
  ArrowUpRight,
  Code2,
  Layers,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import Counter from "../components/Counter";

const stats = [
  { value: 5, suffix: "+", label: "Apps live" },
  { value: 10, suffix: "+", label: "Products shipped" },
  { value: 1.7, suffix: "+", label: "Years building" },
];

// Edit this array to change the blocks. The first item is the big one.
const skills = [
  {
    icon: Code2,
    eyebrow: "Primary focus",
    title: "Frontend Development",
    text: "Fast, accessible and responsive interfaces built with React and TypeScript.",
    points: [
      "Component-driven architecture",
      "Responsive, mobile-first layouts",
      "State management & data fetching",
      "Animations that feel smooth, not heavy",
      "Performance & accessibility",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Motion"],
    featured: true,
  },

  {
    icon: Smartphone,
    title: "Mobile Development",
    text: "Cross-platform mobile apps connected to real production APIs.",
    tags: ["React Native", "Expo"],
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    text: "Complete web apps, from the UI to the APIs and database behind it.",
    tags: ["Node.js", "REST", "PostgreSQL"],
  },
  {
    icon: Sparkles,
    title: "UI Polish",
    text: "The small details: spacing, states and motion that make software feel good.",
    tags: ["Design systems", "Figma"],
  },
];

const Tag = ({ children }) => (
  <span className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[10px] text-[var(--muted)]">
    {children}
  </span>
);

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`
        flex flex-col rounded-2xl border border-[var(--border)]
        bg-[var(--surface)] p-6 transition-colors duration-300
        hover:border-[var(--accent)] cursor-pointer
        ${skill.featured ? "lg:row-span-3 lg:p-8" : ""}
      `}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--accent)]">
        <Icon size={18} />
      </div>

      {skill.eyebrow && (
        <span className="mt-6 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--accent)]">
          {skill.eyebrow}
        </span>
      )}

      <h3
        className={`font-semibold tracking-tight text-[var(--foreground)] ${
          skill.featured ? "mt-2 text-2xl sm:text-3xl" : "mt-5 text-lg"
        }`}
      >
        {skill.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{skill.text}</p>

      {skill.points && (
        <ul className="mt-8 space-y-3">
          {skill.points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 text-sm text-[var(--foreground)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              {point}
            </li>
          ))}
        </ul>
      )}

      {/* mt-auto pushes the tags to the bottom of every card */}
      <div className="mt-auto flex flex-wrap gap-2 pt-8">
        {skill.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </motion.div>
  );
};

export function About() {
  return (
    <section
      id="about"
      className="
        relative min-w-dvw overflow-hidden border-t border-[var(--border)]
        bg-[#121212] px-5 pt-16 pb-16 sm:px-6 sm:pt-24 sm:pb-24 lg:px-8
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
              01 / About
            </span>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Building products,
              <br />
              <span className="text-[var(--muted)]">not just interfaces.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
            Frontend developer focused on building useful, polished and scalable
            digital experiences.
          </p>
        </motion.div>

        {/* STATS */}
        <div className="mt-14 grid grid-cols-1 border-y border-[var(--border)] bg-[var(--bg)] sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="
                flex items-center gap-4 border-b border-[var(--border)]
                px-5 py-6 last:border-b-0
                sm:border-b-0 sm:border-r sm:py-7 sm:last:border-r-0
              "
            >
              <span className="text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)] sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>

              <span className="font-mono text-[9px] uppercase leading-4 tracking-[0.12em] text-[var(--muted)]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* INTRO COPY */}
        <div className="mt-16 max-w-2xl">
          <p className="text-lg leading-8 tracking-tight text-[var(--foreground)]">
            I enjoy turning ideas into products that feel simple, fast and
            intentional.
          </p>

          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
            From mobile applications to web platforms, I care about the details
            that make software feel good to use.
          </p>

          <div className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
            Currently
            <ArrowUpRight size={12} className="text-[var(--accent)]" />
            Building mobile experiences
          </div>
        </div>

        {/* SKILL BLOCKS: big card on the left, three stacked on the right */}
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[1.3fr_1fr]">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
