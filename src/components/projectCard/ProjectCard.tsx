import React from "react";
import style from "./card.module.scss";
import { AvatarGroup, Button } from "@/ui";
import { RiExternalLinkFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

function ProjectCard({
  title,
  codeLink = "#",
  demoLink = "#",
  techStacks,
  thumbnail,
}: IProjectCard) {
  return (
    <div className={style.card}>
      <div className={style.thumbnail}>
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className={style.body}>
        <div className={style.title}>
          <p>{title}</p>
        </div>

        <div className={style.footer}>
          <AvatarGroup avatars={techStacks} styles={{ height: 28 }} />
          <div className={style.demo}>
            <a href={demoLink} target="_blank">
              <p>demo</p>
              <RiExternalLinkFill size={18} color="#646cff" />
            </a>
          </div>
        </div>
        <div className={style.action}>
          <Button
            style={{ width: "100%" }}
            Icon={FaGithub}
            label="Github"
            onClick={() => window.open(codeLink, "_blank")}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
