import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

const Counter = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const count = useMotionValue(0);

  const spring = useSpring(count, {
    stiffness: 80,
    damping: 18,
    mass: 0.8,
  });

  const display = useTransform(spring, (latest) => {
    return `${latest.toFixed(value % 1 === 0 ? 0 : 1)}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{display}</motion.span>;
};


export default Counter;