import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../components/Button";
import { about } from "../data";

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
        min-w-dvw
        items-center
        justify-center
        overflow-hidden
        px-5
        pt-24
        sm:px-6
        lg:px-8
      "
    >
      {/* Subtle background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-[0.025]
          [background-image:linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div className="mx-auto w-full max-w-7xl">
        {/* ================================================= */}
        {/* TOP CONTENT */}
        {/* ================================================= */}

        <div className="flex flex-col items-center text-center">
          {/* Availability */}
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              relative
              z-30
              mb-6
              flex
              items-center
              gap-2
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--surface)]
              px-4
              py-2
              font-mono
              text-[10px]
              uppercase
              tracking-[0.15em]
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

          {/* Main heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-20
              text-center
              text-[clamp(3.2rem,8vw,7.5rem)]
              font-semibold
              leading-[0.9]
              tracking-[-0.065em]
              text-[var(--foreground)]
            "
          >
            <span className="block">Hi, I'm Khalid</span>

            <span
              className="
                mt-2
                block
                font-serif
                text-[0.9em]
                font-normal
                italic
                leading-[0.9]
                tracking-[-0.045em]
                text-[var(--muted)]
              "
            >
              Software Engineer
            </span>
          </motion.h1>
        </div>

        {/* ================================================= */}
        {/* DESKTOP COMPOSITION */}
        {/* ================================================= */}

        <div
          className="
            relative
            mx-auto
            mt-4
            hidden
            min-h-[500px]
            max-w-6xl
            lg:block
          "
        >
          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="
              absolute
              left-0
              top-1/2
              z-20
              w-[260px]
              -translate-y-1/2
            "
          >
            <p
              className="
                text-sm
                leading-6
                text-[var(--muted)]
              "
            >
              I build modern mobile and web experiences with a focus on clean
              interfaces and thoughtful interactions.
            </p>

            <div
              className="
                mt-7
                border-l
                border-[var(--border)]
                pl-4
              "
            >
              <p
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-[var(--muted)]
                "
              >
                Expertise
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  font-medium
                  text-[var(--foreground)]
                "
              >
                React · React Native · TypeScript
              </p>
            </div>
          </motion.div>

          {/* ================= CENTER IMAGE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              bottom-0
              left-1/2
              z-999
              
              -translate-x-1/2
            "
          >
            <img
              src="/khalid.png"
              alt="Khalid Merchant"
              className="
                h-full
                w-full
                object-contain
                object-bottom

                [mask-image:linear-gradient(to_bottom,black_68%,transparent_100%)]
                [-webkit-mask-image:linear-gradient(to_bottom,black_68%,transparent_100%)]
              "
            />
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="
              absolute
              right-0
              top-1/2
              z-20
              w-[260px]
              -translate-y-1/2
            "
          >
            {/* Currently working */}
            <div>
              <p
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-[var(--muted)]
                "
              >
                Currently working on
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  font-medium
                  text-[var(--foreground)]
                "
              >
                Mobile Applications
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  leading-5
                  text-[var(--muted)]
                "
              >
                Building production-ready mobile experiences with React Native.
              </p>
            </div>

            {/* Actions */}
            <div
              className="
                mt-8
                flex
                flex-col
                items-start
                gap-3
              "
            >
              <a href={about.resume} target="_blank" rel="noopener noreferrer">
                <Button
                  icon={<ArrowUpRight size={14} />}
                  className="cursor-pointer"
                >
                  Resume
                </Button>
              </a>

              {/* <Button
                variant="outline"
                icon={<ArrowDown size={14} />}
                onClick={() => scrollToSection("work")}
              >
                View my work
              </Button> */}
            </div>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* TABLET / MOBILE COMPOSITION */}
        {/* ================================================= */}

        <div className="lg:hidden">
          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
            "
          >
            <img
              src="/khalid.png"
              alt="Khalid Merchant"
              className="
     
     h-full
                w-full
                object-contain
                object-bottom

                [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]
                [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]
              "
            />
          </motion.div>

          {/* Supporting information */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.45,
            }}
            className="
              mx-auto
              -mt-8
              max-w-xl
              text-center
            "
          >
            <p
              className="
                text-sm
                leading-6
                text-[var(--muted)]
                sm:text-base
              "
            >
              I build modern mobile and web experiences with a focus on clean
              interfaces and thoughtful interactions.
            </p>

            {/* Current work */}
            <div className="mt-6">
              <p
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-[var(--muted)]
                "
              >
                Currently working on
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  font-medium
                  text-[var(--foreground)]
                "
              >
                Mobile Applications
              </p>
            </div>

            {/* Actions */}
            <div
              className="
                mt-7
                flex
                flex-col
                justify-center
                gap-3
                sm:flex-row
              "
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  icon={<ArrowUpRight size={14} />}
                  fullWidth
                  className="cursor-pointer"
                >
                  Resume
                </Button>
              </a>

              {/* <Button
                variant="outline"
                icon={<ArrowDown size={14} />}
                onClick={() => scrollToSection("work")}
                fullWidth
              >
                View my work
              </Button> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================================================= */}
      {/* BOTTOM META */}
      {/* ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          delay: 0.8,
        }}
        className="
          absolute
          bottom-6
          left-5
          right-5
          flex
          items-center
          justify-between
          sm:left-6
          sm:right-6
          lg:left-8
          lg:right-8
        "
      >
        <span
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-[var(--muted)]
          "
        >
          Mumbai, India
        </span>

        <button
          onClick={() => scrollToSection("about")}
          className="
            hidden
            items-center
            gap-2
            font-mono
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-[var(--muted)]
            transition-colors
            hover:text-[var(--foreground)]
            sm:flex
            cursor-pointer
          "
        >
          Scroll to explore
          <ArrowDown size={12} />
        </button>
      </motion.div>
    </section>
  );
}
