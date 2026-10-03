import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, GitMerge, GitPullRequest, Star } from "lucide-react";
import { BsGithub } from "react-icons/bs";

type PullRequest = {
  number: number;
  title: string;
  href: string;
  highlight?: boolean; // pins this PR with a highlight style
  impact?: string; // one line on what the PR changed (optional)
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
        href: "https://github.com/ToolJet/ToolJet/pull/10023",
        highlight: true,
        impact:
          "Created student attendance tracker component for ToolJet's Template.",
      },
      {
        number: 2,
        title: "Created base64 encoder decoder",
        href: "https://github.com/ToolJet/ToolJet/pull/9653",
      },
      {
        number: 3,
        title: "fix:QueryManager filter-list button issue",
        href: "https://github.com/ToolJet/ToolJet/pull/10039",
      },
    ],
  },
];

const totalPRs = contributions.reduce(
  (sum, c) => sum + c.pullRequests.length,
  0,
);

// Show this many PRs first, the rest sit behind a "Show all" button
const VISIBLE_PRS = 3;

export default function OpenSource() {
  return (
    <section
      id="open-source"
      className="min-w-dvw border-t border-[var(--border)]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
              05 / Open Source
            </span>

            <h2 className="mt-4 text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Open source {/* Highlighter pen sweep behind the word */}
              <span className="relative inline-block">
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-x-[-4px] bottom-1 top-[45%] origin-left -skew-x-6 rounded-sm bg-[var(--accent)] opacity-30"
                />
                <span className="relative">contributions</span>
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--muted)]">
              Contributing to projects beyond my own.
            </p>
          </div>

          {/* Summary numbers */}
          <div className="flex gap-10">
            <div>
              <p className="text-4xl font-semibold tracking-tight text-[var(--foreground)]">
                {String(totalPRs).padStart(2, "0")}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                PRs merged
              </p>
            </div>

            <div>
              <p className="text-4xl font-semibold tracking-tight text-[var(--foreground)]">
                {String(contributions.length).padStart(2, "0")}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                {contributions.length === 1 ? "Project" : "Projects"}
              </p>
            </div>
          </div>
        </div>

        {/* Contributions */}
        <div className="space-y-4">
          {contributions.map((contribution, index) => (
            <ContributionCard
              key={contribution.organization}
              contribution={contribution}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContributionCard({
  contribution,
  index,
}: {
  contribution: Contribution;
  index: number;
}) {
  const [showAll, setShowAll] = useState(false);

  const prs = showAll
    ? contribution.pullRequests
    : contribution.pullRequests.slice(0, VISIBLE_PRS);
  const hiddenCount = contribution.pullRequests.length - prs.length;

  // Moves the glow so it follows the cursor
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
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMove}
      className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-colors duration-300 hover:border-[var(--accent)]"
    >
      {/* Cursor glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), color-mix(in srgb, var(--accent) 14%, transparent), transparent 70%)",
        }}
      />

      {/* Organization header */}
      <div className="relative flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-start lg:justify-between lg:p-7">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg)]">
              <BsGithub size={17} className="text-[var(--foreground)]" />
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

          <div className="mt-4 flex flex-wrap gap-2">
            {contribution.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-[var(--border)] px-2.5 py-1 font-mono text-[9px] text-[var(--muted)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* PR count */}
        <div className="flex shrink-0 items-center gap-2 lg:pt-1">
          <GitPullRequest size={15} className="text-[var(--accent)]" />

          <span className="font-mono text-[10px] text-[var(--muted)]">
            {String(contribution.pullRequests.length).padStart(2, "0")} PRs
            merged
          </span>
        </div>
      </div>

      {/* Pull requests drawn like a git history: line + a node per merge */}
      <div className="relative border-t border-[var(--border)]">
        {prs.map((pr, i) => (
          <a
            key={`${contribution.organization}-${pr.number}-${pr.title}`}
            href={pr.href}
            target="_blank"
            rel="noreferrer"
            className="group/pr flex gap-4 px-5 transition-colors duration-200 hover:bg-[var(--bg)] sm:px-6 lg:px-7"
            style={
              pr.highlight
                ? {
                    background:
                      "color-mix(in srgb, var(--accent) 8%, transparent)",
                  }
                : undefined
            }
          >
            {/* Graph column */}
            <div className="relative w-7 shrink-0">
              <span
                className={`absolute left-1/2 w-px -translate-x-1/2 bg-[var(--border)] ${
                  i === 0 ? "top-1/2" : "top-0"
                } ${i === prs.length - 1 ? "bottom-1/2" : "bottom-0"}`}
              />

              <span
                className={`absolute left-0 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border bg-[var(--bg)] transition-all duration-200 group-hover/pr:border-[var(--accent)] group-hover/pr:text-[var(--accent)] group-hover/pr:shadow-[0_0_16px_-2px_var(--accent)] ${
                  pr.highlight
                    ? "border-[var(--accent)] text-[var(--accent)]"
                    : "border-[var(--border)] text-[var(--muted)]"
                }`}
              >
                <GitMerge size={13} />
              </span>
            </div>

            {/* Content */}
            <div className="flex min-w-0 flex-1 items-center justify-between gap-4 py-4">
              <div className="min-w-0">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="shrink-0 font-mono text-[10px] text-[var(--muted)]">
                    #{pr.number}
                  </span>

                  <span className="truncate text-sm text-[var(--foreground)] transition-colors duration-200 group-hover/pr:text-[var(--accent)]">
                    {pr.title}
                  </span>

                  {pr.highlight && (
                    <span className="hidden shrink-0 items-center gap-1 rounded-full border border-[var(--accent)] px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] text-[var(--accent)] sm:inline-flex">
                      <Star size={9} fill="currentColor" />
                      Highlight
                    </span>
                  )}
                </div>

                {pr.impact && (
                  <p className="mt-1.5 text-xs leading-5 text-[var(--muted)]">
                    {pr.impact}
                  </p>
                )}
              </div>

              <ArrowUpRight
                size={15}
                className="shrink-0 text-[var(--muted)] transition-all duration-200 group-hover/pr:-translate-y-0.5 group-hover/pr:translate-x-0.5 group-hover/pr:text-[var(--accent)]"
              />
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="relative flex items-center justify-between border-t border-[var(--border)] px-5 py-4 sm:px-6 lg:px-7">
        {hiddenCount > 0 || showAll ? (
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="font-mono text-[10px] uppercase tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            {showAll ? "Show less" : `Show ${hiddenCount} more`}
          </button>
        ) : (
          <span />
        )}

        <a
          href={contribution.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wide text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
        >
          View repository
          <ArrowUpRight size={13} />
        </a>
      </div>
    </motion.article>
  );
}
