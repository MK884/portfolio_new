import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "motion/react";
import Counter from "../components/Counter";

const stats = [
  {
    value: 5,
    suffix: "+",
    label: "Apps live",
  },
  {
    value: 10,
    suffix: "+",
    label: "Products shipped",
  },
  {
    value: 1.5,
    suffix: "+",
    label: "Years building",
  },
];

const IntroVideo = () => {
  return (
    <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--surface)]
            "
          >
            <video
              className="
                aspect-video
                w-full
                object-cover
              "
              controls
              playsInline
              preload="metadata"
              poster="/intro-poster.jpg"
            >
              <source src="/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video label */}
            <div
              className="
                pointer-events-none
                absolute
                left-4
                top-4
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-black/50
                px-3
                py-1.5
                font-mono
                text-[9px]
                uppercase
                tracking-[0.12em]
                text-white
                backdrop-blur-md
              "
            >
              <Play size={10} fill="currentColor" />A little about me
            </div>
          </motion.div>
  )
}



export function About() {
  return (
    <section
      id="about"
      className="
        relative
        min-w-dvw
        overflow-hidden
        border-t
        border-[var(--border)]
        px-5
        pt-16
        sm:px-6
        sm:pt-24
        lg:px-8
        bg-[#121212]
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* ================================================= */}
        {/* SECTION HEADER */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            flex
            flex-col
            gap-5
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
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
              01 / About
            </span>

            <h2
              className="
                mt-4
                max-w-2xl
                text-3xl
                font-semibold
                leading-tight
                tracking-[-0.04em]
                text-[var(--foreground)]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Building products,
              <br />
              <span className="text-[var(--muted)]">not just interfaces.</span>
            </h2>
          </div>

          <p
            className="
              max-w-sm
              text-sm
              leading-6
              text-[var(--muted)]
            "
          >
            Frontend developer focused on building useful, polished and scalable
            digital experiences.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* STATS */}
        {/* ================================================= */}

        <div
          className="
    mt-14
    grid
    grid-cols-1
    border-y
    border-[var(--border)]
    sm:grid-cols-3
    bg-[var(--bg)]
  "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="
                        flex
                        items-center
                        gap-4
                        border-b
                        border-[var(--border)]
                        px-5
                        py-6
                        last:border-b-0
                        sm:border-b-0
                        sm:border-r
                        sm:py-7
                        sm:last:border-r-0
                      "
            >
              <span
                className="
          text-3xl
          font-semibold
          tracking-[-0.05em]
          text-[var(--foreground)]
          sm:text-4xl
        "
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>

              <span
                className="
          font-mono
          text-[9px]
          uppercase
          leading-4
          tracking-[0.12em]
          text-[var(--muted)]
        "
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ================================================= */}
        {/* VIDEO + INTRO */}
        {/* ================================================= */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-[1.4fr_0.6fr]
            lg:items-center
            lg:gap-16
          "
        >
          {/* Video */}
         <IntroVideo />

          {/* About copy */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.15em]
                text-[var(--muted)]
              "
            >
              The short version
            </span>

            <p
              className="
                mt-4
                text-lg
                leading-8
                tracking-tight
                text-[var(--foreground)]
              "
            >
              I enjoy turning ideas into products that feel simple, fast and
              intentional.
            </p>

            <p
              className="
                mt-4
                text-sm
                leading-6
                text-[var(--muted)]
              "
            >
              From mobile applications to web platforms, I care about the
              details that make software feel good to use.
            </p>

            <div
              className="
                mt-7
                flex
                items-center
                gap-2
                font-mono
                text-[10px]
                uppercase
                tracking-[0.12em]
                text-[var(--muted)]
              "
            >
              Currently
              <ArrowUpRight size={12} className="text-[var(--accent)]" />
              Building mobile experiences
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================================================= */}
      {/* SKILLS MARQUEE */}
      {/* ================================================= */}

      {/* <SkillsMarquee /> */}
    </section>
  );
}
