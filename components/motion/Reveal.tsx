"use client";

import {
  motion,
  type HTMLMotionProps,
  useReducedMotion,
} from "framer-motion";
import { ReactNode } from "react";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  distance?: number;
};

export function Reveal({
  children,
  delay = 0,
  distance = 45,
  className,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              y: distance,
            }
      }
      whileInView={
        reduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 0.85,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealLeft({
  children,
  delay = 0,
  className,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              x: -60,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 0.9,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealRight({
  children,
  delay = 0,
  className,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              x: 60,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 0.9,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleReveal({
  children,
  delay = 0,
  className,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              scale: 0.94,
              y: 20,
            }
      }
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 0.9,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}