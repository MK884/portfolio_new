import React from "react";
import style from "./carousel.module.scss";

function CarouselContainer({ children }: { children: React.ReactElement }) {
  return (
    <div className={style.carousel}>
      {Array(2) // Duplicate items for continuous effect
        .fill(children)
        .map((item, index) => (
          <div className={style.slider} key={index}>{item}</div>
        ))}
  </div>
  );
}

export default CarouselContainer;
