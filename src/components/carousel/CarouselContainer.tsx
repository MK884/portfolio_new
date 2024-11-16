import React, { Ref } from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";
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

interface Props {
  children: React.ReactNode;
  settings?: Settings;
}

export const SlickCarouselContainer = React.forwardRef<Slider, Props>(
  ({ children, settings }, ref) => {
    const config = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      className: style.slick,
      slidesToShow: 3,
      slidesToScroll: 3,
      swipeToSlide: true,
      centerMode: true,
      centerPadding: "0px",
      nextArrow: <></>,
      prevArrow: <></>,
      responsive: [
        {
          breakpoint: 1444,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "20px",
          },
        },
      ],
      ...settings,
    };

    return (
      <Slider {...config} ref={ref}>
        {children}
      </Slider>
    );
  }
);
