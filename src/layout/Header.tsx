import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  target: string;
}

const navItems: NavItem[] = [
  {
    label: "About",
    target: "about",
  },
  {
    label: "Skills",
    target: "skills",
  },
  {
    label: "Work",
    target: "work",
  },
  {
    label: "Experience",
    target: "experience",
  },

  {
    label: "Open Source",
    target: "open-source",
  },
  {
    label: "Certificates",
    target: "certificates",
  },
  {
    label: "Contact",
    target: "contact",
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "work",
      "experience",
      "open-source",
      "certificates",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (target: string) => {
    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDark((current) => !current);

    document.documentElement.classList.toggle("dark", !isDark);
  };

  return (
    <header
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        border-b
        border-[var(--border)]
        bg-[var(--bg)]
        backdrop-blur-md
      "
    >
      <div
        className="
          mx-auto
          flex
          h-16
          max-w-6xl
          items-center
          justify-between
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="group flex items-center gap-2.5 cursor-pointer"
          aria-label="Go to homepage"
        >
          {/* <span
            className="
    text-xl
    font-bold
    tracking-tight
    text-[var(--foreground)]
    sm:text-2xl
  "
          >
            KM
          </span> */}
          <img
            src="./logo.png"
            alt="Khalid Merchant"
            className="
      h-9
      w-9
      object-contain
    "
          />

          <span
            className="
    text-xl
    font-light
    text-[var(--muted)]
    sm:text-2xl
  "
          >
            /
          </span>

          <span
            className="
    text-lg
    font-medium
    tracking-tight
    text-[var(--muted)]
    transition-colors
    group-hover:text-[var(--foreground)]
    sm:block
  "
          >
            Khalid Merchant
          </span>

          <span
            className="
    ml-2
    hidden
    items-center
    gap-2
    rounded-full
    border
    border-[var(--accent)]/20
    bg-[var(--surface)]
    px-2
    
    font-mono
    text-[10px]
    font-semibold
    uppercase
    tracking-[0.15em]
    text-[var(--muted)]
    lg:flex
  "
          >
            <span
              className="
      h-2
      w-2
      rounded-full
      bg-emerald-500
      shadow-[0_0_7px_rgba(16,185,129,0.5)]
    "
            />
            Available
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav
          className="
            hidden
            items-center
            gap-6
            md:flex
          "
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.target;

            return (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className={`
        rounded-md
        px-3
        py-1.5
        font-mono
        text-xs
        transition-all
        duration-200
        cursor-pointer
        ${
          isActive
            ? `
              text-[var(--foreground)]
              shadow-sm
            `
            : `
              text-[var(--muted)]
              hover:bg-[var(--surface)]
              hover:text-[var(--foreground)]
            `
        }
      `}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              border
              border-[var(--border)]
              bg-[var(--surface)]
              text-[var(--muted)]
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:text-[var(--foreground)]
            "
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button> */}

          {/* Contact CTA */}
          {/* <button
            onClick={() => scrollToSection("contact")}
            className="
              rounded-lg
              bg-[var(--accent)]
              px-4
              py-2
              font-mono
              text-xs
              font-medium
              text-white
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:opacity-90
            "
          >
            Let's Talk
          </button> */}
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              border
              border-[var(--border)]
              bg-[var(--surface)]
              text-[var(--muted)]
            "
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button> */}

          {/* Burger */}
          <button
            onClick={() => setIsMenuOpen((current) => !current)}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              border
              border-[var(--border)]
              bg-[var(--surface)]
              text-[var(--foreground)]
              cursor-pointer
            "
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          overflow-hidden
          border-t
          border-[var(--border)]
          bg-[var(--background)]
          transition-all
          duration-300
          md:hidden
          ${
            isMenuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 border-t-0 opacity-0"
          }
        `}
      >
        <nav
          className="
            mx-auto
            flex
            max-w-6xl
            flex-col
            px-5
            py-4
            sm:px-6
          "
          aria-label="Mobile navigation"
        >
          {navItems.map((item, index) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className="
                flex
                items-center
                justify-between
                border-b
                border-[var(--border)]
                py-4
                text-left
                font-mono
                text-sm
                text-[var(--muted)]
                transition-colors
                duration-200
                hover:text-[var(--foreground)]
                cursor-pointer
              "
            >
              <span>
                <span className="mr-3 text-[var(--accent)]">0{index + 1}</span>

                {item.label}
              </span>

              <span className="text-xs">↗</span>
            </button>
          ))}

          <button
            onClick={() => scrollToSection("contact")}
            className="
              mt-4
              w-full
              rounded-lg
              bg-[var(--accent)]
              px-4
              py-3
              font-mono
              text-xs
              font-medium
              text-white
              cursor-pointer
            "
          >
            Let's Talk
          </button>
        </nav>
      </div>
    </header>
  );
}
