import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import NetworkAzure from "../assets/certificates/cursera_project_nextwork_azure.png";
import GenAi from "../assets/certificates/google_cloud_gen_ai_gdsc.png";
import Javascript from "../assets/certificates/javascript_linkedin.png";
import MERN from "../assets/certificates/mern_stack_wih_project_udemy.png";
import NodeJs from "../assets/certificates/nodejs_topics_scaler.png";
import Tensorflow from "../assets/certificates/cursera_project_nextwork.png";
import SIH from "../assets/certificates/sih_khalid.png";
import Vss from "../assets/certificates/vss_appreciation.png";

type Certificate = {
  title: string;
  image: string;
  href: string;
};

export const certificates: Array<Certificate> = [
  {
    title: "Certificate of Appreciation - Vishleshan Software Solutions",
    href: "https://drive.google.com/file/d/1Uy_fpPbZMkz7idzh78CLXQeZDzDBlgly/view?usp=sharing",
    image: Vss,
  },
  {
    title: "Cursera Project Network Azure",
    href: "https://drive.google.com/file/d/1CPqs1rr-B9bwHSFRbJ73RoZ_HjKaBTv1/view?usp=sharing",
    image: NetworkAzure,
  },
  {
    title: "Google Cloud Gen AI",
    href: "https://drive.google.com/file/d/1kOSAR_jKmcZk66ueJO8ak5_NJT1fPW-B/view?usp=sharing",
    image: GenAi,
  },
  {
    title: "Smart India Hackathon 2023",
    href: "https://drive.google.com/file/d/1mlaMYwAwlYwOIe3dXYQ9Mhuzx07qfkzI/view?usp=sharing",
    image: SIH,
  },
  {
    title: "JavaScript Events",
    href: "https://drive.google.com/file/d/1Oal0_ZGMR4MFyHgMelJY97D5rDOSrM7H/view?usp=sharing",
    image: Javascript,
  },
  {
    title: "MERN Stack",
    href: "https://drive.google.com/file/d/1MHJgMjhwVXN97y9gbIA1lT9S3QIsJRyU/view?usp=sharing",
    image: MERN,
  },
  {
    title: "NodeJs Scaler",
    href: "https://drive.google.com/file/d/1e-yWf5Sf7Ja1O6zQoFJS-cTwROdY2P71/view?usp=sharing",
    image: NodeJs,
  },
  {
    title: "Tweet Emotion Recognition with TensorFlow",
    href: "https://guess-words-game.vercel.app/",
    image: Tensorflow,
  },
];

const AUTO_SLIDE_DURATION = 4000;

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /*
   * Number of cards visible at each breakpoint.
   *
   * Mobile  -> 1
   * Tablet  -> 2
   * Desktop -> 3
   *
   * We calculate the maximum starting index based on
   * the number of visible cards.
   */
  const getVisibleCards = () => {
    if (typeof window === "undefined") return 3;

    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;

    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxIndex = Math.max(0, certificates.length - visibleCards);

  /*
   * Auto slide
   */
  useEffect(() => {
    if (isPaused) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => {
        if (current >= maxIndex) {
          return 0;
        }

        return current + 1;
      });
    }, AUTO_SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused, maxIndex]);

  /*
   * Keep index valid when switching screen sizes.
   */
  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [activeIndex, maxIndex]);

  return (
    <section
      id="certificates"
      className="min-w-dvw border-t border-[var(--border)] bg-[var(--bg)]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end lg:mb-12">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
              06 / Certificates
            </span>

            <h2 className="mt-4 text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Certifications
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
            A collection of certifications and learning milestones.
          </p>
        </div>

        {/* Slider */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            animate={{
              x: `-${activeIndex * (100 / visibleCards)}%`,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex"
          >
            {certificates.map((certificate) => (
              <div
                key={certificate.title}
                className="
                  w-full
                  shrink-0
                  px-1.5
                  sm:w-1/2
                  lg:w-1/3
                "
              >
                <motion.a
                  href={certificate.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  className="
                    group
                    relative
                    block
                    aspect-[1.45/1]
                    overflow-hidden
                    rounded-xl
                    border
                    border-[var(--border)]
                    bg-[var(--surface)]
                  "
                >
                  {/* Background Image */}
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/50">
                          Certificate
                        </p>

                        <h3 className="text-base font-medium leading-6 text-white sm:text-lg">
                          {certificate.title}
                        </h3>
                      </div>

                      {/* Arrow */}
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/20
                          bg-white/10
                          text-white
                          backdrop-blur-md
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:bg-white
                          group-hover:text-black
                        "
                      >
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.a>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom controls */}
        <div className="mt-6 flex items-center justify-between">
          {/* Progress */}
          <div className="flex items-center gap-1.5">
            {Array.from({
              length: maxIndex + 1,
            }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show certificates ${index + 1}`}
                className="group flex h-4 items-center cursor-pointer"
              >
                <span
                  className={`
                    block
                    h-1
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      activeIndex === index
                        ? "w-7 bg-[var(--foreground)]"
                        : "w-1.5 bg-[var(--border)] group-hover:bg-[var(--muted)]"
                    }
                  `}
                />
              </button>
            ))}
          </div>

          {/* Counter */}
          <span className="font-mono text-[10px] text-[var(--muted)]">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(maxIndex + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
