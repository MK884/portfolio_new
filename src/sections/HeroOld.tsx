import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../components/Button";

const technologies = ["React Native", "React", "TypeScript", "Node.js", "AI"];

export function Hero() {
  const scrollToSection = (target: string) => {
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        scroll-mt-20
        items-center
        overflow-hidden
        pt-20
      "
    >
      {/* Background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        {/* Soft accent glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/4
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[var(--accent)]
            opacity-[0.04]
            blur-[120px]
          "
        />
      </div>

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-6xl
          grid-cols-1
          gap-12
          px-5
          py-20
          sm:px-6
          lg:grid-cols-[1.15fr_0.85fr]
          lg:items-center
          lg:gap-16
          lg:px-8
          lg:py-28
        "
      >
        {/* Left Content */}
        <div>
          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              mb-6
              flex
              items-center
              gap-2
              font-mono
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[var(--muted)]
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-emerald-500
                shadow-[0_0_8px_rgba(16,185,129,0.5)]
              "
            />
            Available for work
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-3xl
              text-[clamp(2.8rem,7vw,5.5rem)]
              font-semibold
              leading-[0.95]
              tracking-[-0.055em]
              text-[var(--foreground)]
            "
          >
            Building fast,
            <br />
            <span className="text-[var(--muted)]">purposeful</span>{" "}
            <span className="text-[var(--accent)]">web,</span>
            <br />
            <span className="text-[var(--accent)]">mobile</span> & AI
            <br />
            experiences.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              mt-7
              max-w-xl
              text-sm
              leading-7
              text-[var(--muted)]
              sm:text-base
            "
          >
            I'm Khalid Merchant, a software developer focused on building
            thoughtful digital experiences across mobile, web, and modern
            AI-powered applications.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.28,
            }}
            className="
              mt-8
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
            <Button
              icon={<ArrowUpRight size={14} />}
              onClick={() => scrollToSection("work")}
            >
              View my work
            </Button>

            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              Let's talk
            </Button>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
              font-mono
              text-[10px]
              text-[var(--muted)]
              sm:text-xs
            "
          >
            {technologies.map((technology, index) => (
              <span key={technology} className="flex items-center gap-4">
                {technology}

                {index !== technologies.length - 1 && (
                  <span className="text-[var(--border)]">/</span>
                )}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Code Preview */}
        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="hidden lg:block"
        >
          <CodePreview />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.6,
        }}
        onClick={() => scrollToSection("about")}
        className="
          absolute
          bottom-8
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-[var(--muted)]
          transition-colors
          hover:text-[var(--foreground)]
          sm:flex
        "
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.2em]">
          Scroll
        </span>

        <ArrowDown size={14} />
      </motion.button>
    </section>
  );
}

function CodePreview() {
  return (
    <div className="relative">
      {/* Decorative glow */}
      <div
        className="
          absolute
          -inset-4
          -z-10
          rounded-3xl
          bg-[var(--accent)]
          opacity-[0.04]
          blur-3xl
        "
      />

      <div
        className="
          overflow-hidden
          rounded-xl
          border
          border-[var(--border)]
          bg-[var(--surface)]
          shadow-2xl
        "
      >
        {/* Window Header */}
        <div
          className="
            flex
            h-10
            items-center
            justify-between
            border-b
            border-[var(--border)]
            px-4
          "
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
            <span className="h-2 w-2 rounded-full bg-green-400/70" />
          </div>

          <span className="font-mono text-[9px] text-[var(--muted)]">
            developer.ts
          </span>
        </div>

        {/* Code */}
        <div className="p-5">
          <pre
            className="
              overflow-hidden
              font-mono
              text-[11px]
              leading-6
              text-[var(--muted)]
            "
          >
            <code>
              <span className="text-[var(--accent)]">const</span> developer ={" "}
              {"{"}
              {"\n"}
              {"  "}name:{" "}
              <span className="text-emerald-500">"Khalid Merchant"</span>,{"\n"}
              {"  "}role:{" "}
              <span className="text-emerald-500">"Software Developer"</span>,
              {"\n"}
              {"\n"}
              {"  "}focus: [{"\n"}
              {"    "}
              <span className="text-emerald-500">"React Native"</span>,{"\n"}
              {"    "}
              <span className="text-emerald-500">"TypeScript"</span>,{"\n"}
              {"    "}
              <span className="text-emerald-500">"Full Stack"</span>,{"\n"}
              {"    "}
              <span className="text-emerald-500">"AI"</span>
              {"\n"}
              {"  "}],{"\n"}
              {"\n"}
              {"  "}build:{" "}
              <span className="text-emerald-500">"useful things"</span>
              {"\n"}
              {"};"}
            </code>
          </pre>
        </div>
      </div>

      {/* Floating metadata */}
      <div
        className="
          absolute
          -bottom-5
          -left-5
          rounded-lg
          border
          border-[var(--border)]
          bg-[var(--surface)]
          px-4
          py-3
          shadow-xl
        "
      >
        <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--muted)]">
          Currently building
        </p>

        <p className="mt-1 text-xs font-medium text-[var(--foreground)]">
          Mobile · Web · AI
        </p>
      </div>
    </div>
  );
}
