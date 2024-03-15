"use client";
import React, { use, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
  direction: number;
  className?: string;
}

export default function HorizontalAnimWrapper({
  children,
  direction,
  className,
}: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], [direction, 0]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ translateX: xTransform }}>{children}</motion.div>
    </div>
  );
}
