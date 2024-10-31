import { CarouselContainer, ProjectCard, SkillCard } from "@/components";
import Header from "@/components/header/Header";
import "@/styles/main.scss";
import { Avatar, AvatarGroup, Button } from "@/ui";
import { FaChevronRight } from "react-icons/fa";

const avatars = [
  {
    src: "https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
  },
  {
    src: "https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
  },
  {
    src: "https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
  },
  {
    src: "https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
  },
];

export default function App() {
  return (
    <div className="main">
      <Header />
      <div className="section">
        <h1>Merchnat khalid</h1>
        <h2>Full Stck Developer</h2>
        <Button label="Resume" Icon={FaChevronRight} />
        <Avatar
          styles={{ height: 30 }}
          src="https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256"
        />
        <AvatarGroup avatars={avatars} styles={{ height: 30 }} />
        <div>
          <div style={{ marginBlock: "20px" }}>
            <CarouselContainer>
              <>
                <ProjectCard
                  techStacks={avatars}
                  title="class 1"
                  codeLink=""
                  demoLink=""
                  thumbnail="cover.png"
                />
                <ProjectCard
                  techStacks={avatars}
                  title="class 2"
                  codeLink=""
                  demoLink=""
                  thumbnail="cover.png"
                />
                <ProjectCard
                  techStacks={avatars}
                  title="class 3"
                  codeLink=""
                  demoLink=""
                  thumbnail="cover.png"
                />
                <ProjectCard
                  techStacks={avatars}
                  title="class 4"
                  codeLink=""
                  demoLink=""
                  thumbnail="cover.png"
                />
                <ProjectCard
                  techStacks={avatars}
                  title="class 5"
                  codeLink=""
                  demoLink=""
                  thumbnail="cover.png"
                />
                <ProjectCard
                  techStacks={avatars}
                  title="class 6"
                  codeLink=""
                  demoLink=""
                  thumbnail="cover.png"
                />
              </>
            </CarouselContainer>
          </div>
          <div style={{ marginBlock: "20px" }}>
            <CarouselContainer>
              <>
                <SkillCard src="https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256" text="react"/>
                <SkillCard src="https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256" text="react"/>
                <SkillCard src="https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256" text="react"/>
                <SkillCard src="https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256" text="react"/>
                <SkillCard src="https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256" text="react"/>
                <SkillCard src="https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256" text="react"/>
                
              </>
            </CarouselContainer>
          </div>
        </div>
      </div>
      <div className="section2"></div>
    </div>
  );
}
