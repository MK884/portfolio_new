import React from "react";
import style from "./carousel.module.scss";

function CarouselContainer({
  children,
  speed = 50,
  direction = "ltr",
}: {
  children: React.ReactElement;
  speed?: number;
  direction?: "ltr" | "rtl";
}) {
  const animationDuration = `${speed}s`;
  const animationDirection = direction === "ltr" ? "normal" : "reverse";

  return (
    <div className={style.carousel}>
      {Array(2) // Duplicate items for continuous effect
        .fill(children)
        .map((item, index) => (
          <div
            className={style.slider}
            style={{
              animationDuration,
              animationDirection,
            }}
            key={index}
          >
            {item}
          </div>
        ))}
    </div>
  );
}

export default CarouselContainer;
