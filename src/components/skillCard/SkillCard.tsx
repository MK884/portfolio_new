import style from "./card.module.scss";

function SkillCard({ src, text }: ISkillCard) {
  return (
    <div className={style.card}>
      <div>
        <img src={src} alt="logo" />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default SkillCard;
