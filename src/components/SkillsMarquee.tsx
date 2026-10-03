interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
}

export function SkillsMarquee({ skills }: { skills: Skill[] }) {
  return (
    <div
      className="
        mt-24
        min-w-full
        overflow-hidden
        border-y
        border-[var(--border)]
        py-6
      "
    >
      <div className="skills-marquee-track">
        <SkillSet skills={skills} />
        <SkillSet skills={skills} />
      </div>
    </div>
  );
}

function SkillSet({ skills }: { skills: Skill[] }) {
  return (
    <div className="skills-marquee-set">
      {skills.map((skill) => {
        const Icon = skill?.icon;

        return (
          <div
            key={skill.name}
            className="
              skill-item
              group
              flex
              shrink-0
              items-center
              gap-3
              px-7
              sm:px-10
            "
            style={
              {
                "--skill-color": skill.color,
              } as React.CSSProperties
            }
          >
            {Icon && (
              <Icon
                className="
    h-5
    w-5
    shrink-0
    text-[var(--muted)]
    opacity-50
    grayscale
    transition-all
    duration-300
    group-hover:text-[var(--skill-color)]
    group-hover:opacity-100
    group-hover:grayscale-0
  "
              />
            )}

            <span
              className="
                whitespace-nowrap
                font-mono
                text-xs
                text-[var(--muted)]
                transition-colors
                duration-300
                group-hover:text-[var(--foreground)]
              "
            >
              {skill.name}
            </span>

            <span
              className="
                ml-7
                h-1
                w-1
                shrink-0
                rounded-full
                bg-[var(--border)]
                transition-all
                duration-300
                group-hover:bg-[var(--skill-color)]
              "
            />
          </div>
        );
      })}
    </div>
  );
}
