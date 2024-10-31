import React from "react";
import style from "./card.module.scss";
import { AvatarGroup } from "@/ui";
import { RiExternalLinkFill } from "react-icons/ri";

function ProjectCard() {
  return (
    <div className={style.card}>
      <div className={style.thumbnail}>
        <img src="cover.png" alt="" />
      </div>
      <div className={style.body}>
        <div className={style.title}>
          <p>Title saks asakjsi as aios au saohj siaijsi ajsia s</p>
        </div>

        <div className={style.footer}>
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
            styles={{ height: 28 }}
          />
          <div className={style.demo}>
            <a href="">
              <p>demo</p>
              <RiExternalLinkFill size={18} color="#646cff" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
