import { motion } from "motion/react";
import {
  ArrowUpRight,
  GitPullRequest,
} from "lucide-react";
import { BsGithub } from "react-icons/bs";

type PullRequest = {
  number: number;
  title: string;
  href: string;
};

type Contribution = {
  organization: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  pullRequests: PullRequest[];
};

const contributions: Contribution[] = [
  {
    organization: "ToolJet",
    description:
      "Contributed frontend fixes and improvements to the ToolJet open-source project.",
    technologies: ["React", "JavaScript", "Frontend"],
    githubUrl: "https://github.com/ToolJet/ToolJet",
    pullRequests: [
      {
        number: 1,
        title: "Frontend improvement",
        href: "#",
      },
      {
        number: 2,
        title: "UI fix and enhancement",
        href: "#",
      },
      {
        number: 3,
        title: "JavaScript improvement",
        href: "#",
      },
    ],
  },

  
];

export default function OpenSource() {
  return (
    <section
      id="open-source"
      className="min-w-dvw border-t border-[var(--border)]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        {/* Header */}
        <div className="mb-12 lg:mb-14">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
            04 / Open Source
          </span>

          <h2 className="mt-4 text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Open source contributions
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--muted)]">
            Contributing to projects beyond my own.
          </p>
        </div>

        {/* Contributions */}
        <div className="space-y-4">
          {contributions.map((contribution, index) => (
            <motion.article
              key={contribution.organization}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                overflow-hidden
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                transition-colors
                duration-300
                hover:border-[var(--foreground)]/20
              "
            >
              {/* Organization Header */}
              <div className="flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-start lg:justify-between lg:p-7">
                <div>
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-[var(--border)]
                        bg-[var(--bg)]
                      "
                    >
                      <BsGithub
                        size={17}
                        className="text-[var(--foreground)]"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-[var(--foreground)]">
                        {contribution.organization}
                      </h3>

                      <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--muted)]">
                        Open Source
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 max-w-2xl text-sm leading-6 text-[var(--muted)]">
                    {contribution.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {contribution.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-md
                          border
                          border-[var(--border)]
                          px-2.5
                          py-1
                          font-mono
                          text-[9px]
                          text-[var(--muted)]
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* PR Count */}
                <div className="flex shrink-0 items-center gap-2 lg:pt-1">
                  <GitPullRequest
                    size={15}
                    className="text-[var(--accent)]"
                  />

                  <span className="font-mono text-[10px] text-[var(--muted)]">
                    {String(contribution.pullRequests.length).padStart(
                      2,
                      "0",
                    )}{" "}
                    PRs merged
                  </span>
                </div>
              </div>

              {/* Pull Requests */}
              <div className="border-t border-[var(--border)]">
                {contribution.pullRequests.map((pr) => (
                  <a
                    key={`${contribution.organization}-${pr.number}-${pr.title}`}
                    href={pr.href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group/pr
                      flex
                      items-center
                      justify-between
                      gap-4
                      px-5
                      py-4
                      transition-colors
                      duration-200
                      hover:bg-[var(--bg)]
                      sm:px-6
                      lg:px-7
                    "
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <span className="shrink-0 font-mono text-[10px] text-[var(--muted)]">
                        #{pr.number}
                      </span>

                      <span className="truncate text-sm text-[var(--foreground)] transition-colors duration-200 group-hover/pr:text-[var(--accent)]">
                        {pr.title}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="
                        shrink-0
                        text-[var(--muted)]
                        transition-all
                        duration-200
                        group-hover/pr:-translate-y-0.5
                        group-hover/pr:translate-x-0.5
                        group-hover/pr:text-[var(--accent)]
                      "
                    />
                  </a>
                ))}
              </div>

              {/* Organization GitHub */}
              <div className="flex justify-end border-t border-[var(--border)] px-5 py-4 sm:px-6 lg:px-7">
                <a
                  href={contribution.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-wide
                    text-[var(--muted)]
                    transition-colors
                    duration-200
                    hover:text-[var(--foreground)]
                  "
                >
                  View repository
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}