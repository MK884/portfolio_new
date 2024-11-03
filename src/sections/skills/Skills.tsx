import { CarouselContainer, SkillCard } from "@/components";
import { skills } from "@/data";
import style from "./skills.module.scss";

function Skills() {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <h4>Skills</h4>
        
          <CarouselContainer direction="ltr" speed={20}>
            <>
              {skills?.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </>
          </CarouselContainer>
          <CarouselContainer direction="rtl" speed={20}>
            <>
              {skills?.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </>
          </CarouselContainer>
      </div>
    </section>
  );
}

export default Skills;
