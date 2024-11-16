import { AvatarGroup } from "@/ui";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiExternalLinkFill } from "react-icons/ri";
import style from "./card.module.scss";

function ProjectCard({
  title,
  codeLink = "#",
  demoLink = "#",
  techStacks,
  thumbnail,
  scaleEffect = false,
}: IProjectCard) {
  return (
    <div className={`${style.card} ${scaleEffect ? style.scale : ""}`}>
      <div className={style.thumbnail}>
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className={style.body}>
        <div className={style.title}>
          <p>{title}</p>
        </div>

        <div className={style.footer}>
          <AvatarGroup avatars={techStacks} styles={{ height: 28 }} />
          <div className={style.options}>
            <HiOutlineDotsHorizontal size={22} />
            <div className={style.list}>
              <div className={style.option}>
                <a href={demoLink} target="_blank">
                  <p>Demo</p>
                  <RiExternalLinkFill size={16} color="#646cff" />
                </a>
              </div>
              <div className={style.option}>
                <a href={codeLink} target="_blank">
                  <p>Github</p>
                  <FaGithub size={16} color="#646cff" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
