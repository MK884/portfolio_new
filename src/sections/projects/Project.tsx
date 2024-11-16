import {
  ProjectCard,
  SlickCarouselContainer
} from "@/components";
import { majorProjects, miniProjects, openSourceProjects } from "@/data";
import style from "./projects.module.scss";

function Project() {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <h4>My Recent Activities</h4>
        <div className={style.types}>
          <h5>Open Source contribution</h5>
          <div className={style.openPorjects}>
            {openSourceProjects?.map((project, index) => (
              <ProjectCard {...project} key={index} scaleEffect />
            ))}
          </div>
        </div>
        <div className={style.types}>
          <h5>Full stack Projects</h5>
          <SlickCarouselContainer>
            {majorProjects?.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))}
          </SlickCarouselContainer>
        </div>
        <div className={style.types}>
          <h5>Projects</h5>
          <SlickCarouselContainer settings={{ rtl:true }}>
            {miniProjects?.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))}
          </SlickCarouselContainer>
        </div>
      </div>
    </section>
  );
}

export default Project;
