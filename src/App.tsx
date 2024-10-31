import { ProjectCard } from "@/components";
import Header from "@/components/header/Header";
import "@/styles/main.scss";
import { Avatar, AvatarGroup, Button } from "@/ui";
import { FaChevronRight } from "react-icons/fa";

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
        <AvatarGroup
          avatars={[
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
          ]}
          styles={{ height: 30 }}
        />
        <div style={{ marginBlock: "10px", display: "flex", gap: "10px" }}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      <div className="section2"></div>
    </div>
  );
}
